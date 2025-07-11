import React, { useRef } from 'react';
import { Animated, StatusBar, View, FlatList, Image, Text, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "@/css/Constant";
import styles from '@/css/Pinned';
import { useFavourites } from '@/plugins/FavouritesContext';
import AddedFavouritesIcon from "@/components/Icons/AddedFavouritesIcon";

// @ts-ignore
const AnimatedCard = ({ item, onRemove }) => {
    const animValue = useRef(new Animated.Value(1)).current;

    const handleRemove = () => {
        Animated.timing(animValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => onRemove(item.id));
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
        });
    };

    return (
        <Animated.View
            style={[
                styles.cardContainer,
                {
                    opacity: animValue,
                    transform: [{
                        scale: animValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0.8, 1]
                        })
                    }]
                }
            ]}
        >
            <Pressable
                style={styles.addFavourites}
                onPress={handleRemove}
            >
                <AddedFavouritesIcon />
            </Pressable>
            <View style={styles.card}>
                <View style={styles.headBlock}>
                    <Image
                        style={styles.pinnedImage}
                        source={item.image}
                    />
                    <View>
                        <Text style={styles.pinnedDate}>{formatDate(item.addedAt)}</Text>
                        <Text style={styles.pinnedName}>{item.name}</Text>
                    </View>
                </View>
                <View style={styles.textBlock}>
                    <Text style={styles.textItem}>
                        {item.description}
                    </Text>
                </View>
            </View>
        </Animated.View>
    );
};

export default function Pinned() {
    const { favourites, removeFavourite } = useFavourites();

    const sortedFavourites = [...favourites].sort((a, b) =>
        new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime()
    );

    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                backgroundColor="rgba(0,0,0,0.3)"
                translucent
                barStyle="light-content"
            />
            <SafeAreaProvider>
                <SafeAreaView style={[globalStyles.page, { flex: 1 }]} edges={['top']}>
                    <View style={globalStyles.pageContent}>
                        <View style={styles.pageContentItem}>
                            {favourites.length > 0 ? (
                                <FlatList
                                    data={sortedFavourites}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => (
                                        <AnimatedCard
                                            item={item}
                                            onRemove={removeFavourite}
                                        />
                                    )}
                                    contentContainerStyle={styles.listContainer}
                                    showsVerticalScrollIndicator={false}
                                />
                            ) : (
                                <Text style={styles.emptyText}>Нет избранных элементов</Text>
                            )}
                        </View>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    );
}