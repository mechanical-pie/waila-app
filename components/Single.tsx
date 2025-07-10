import React from 'react';
import globalStyles from "@/css/Constant";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import styles from '@/css/Single';
import {Pressable, ScrollView, View, Text, StatusBar} from "react-native";
import SingleCard from "@/components/Single/SingleCard";
import AskLookButtons from "@/components/AskLookButtons";
import Preloader from "@/components/Preloader";
import {useNavigation} from "@react-navigation/native";

export default function Single() {

    const navigation = useNavigation();

    // @ts-ignore
    const handlePress = (menu) => {
        // @ts-ignore
        navigation.navigate(menu);
    };

    return (
        <View style={{flex: 1}}>
            <StatusBar
                backgroundColor="rgba(0,0,0,0.3)"
                translucent
                barStyle="light-content"
            />
            <SafeAreaProvider>
                <SafeAreaView style={[globalStyles.page, {flex: 1}]} edges={['top']}>
                    <View style={styles.pageContent}>
                        <Pressable style={styles.backButton} onPress={() => handlePress('History')}>
                            <Text style={styles.backButtonText}>Back</Text>
                        </Pressable>
                        <ScrollView
                            bounces={false}
                            overScrollMode="never"
                            showsVerticalScrollIndicator={false}
                            alwaysBounceVertical={false}
                            style={styles.singleScrollView}
                        >
                            <View style={styles.singleContent}>
                                <SingleCard />
                                <Preloader />
                            </View>
                        </ScrollView>
                    </View>
                    <AskLookButtons />
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    );
}