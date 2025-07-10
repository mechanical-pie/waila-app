import React from 'react';
import {Image, ImageSourcePropType, View, Text, Pressable} from "react-native";
import styles from '@/css/History/HistoryBlock';
import {useNavigation} from "@react-navigation/native";

interface HistoryBlockProps {
    source: ImageSourcePropType;
    title: String;
    description: String
}

export default function HistoryBlock({ source, title, description }: HistoryBlockProps) {

    const navigation = useNavigation();

    // @ts-ignore
    const handlePress = (menu) => {
        // @ts-ignore
        navigation.navigate(menu);
    };

    return (
        <Pressable style={styles.historyBlock} onPress={() => handlePress('Single')}>
            <Image
                style={styles.imageBlock}
                source={source}
            />
            <View style={styles.blockContent}>
                <Text style={styles.titleBlock}>{title}</Text>
                <Text
                    style={styles.descriptionBlock}
                    numberOfLines={3}
                    ellipsizeMode="tail"
                >
                    {description}
                </Text>
            </View>
        </Pressable>
    );
}