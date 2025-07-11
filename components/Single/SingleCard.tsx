import React from 'react';
import {Image, View, Text, Pressable} from "react-native";
import styles from '@/css/Single/SingleCard';
import AddedFavouritesIcon from "@/components/Icons/AddedFavouritesIcon";
import AddFavouritesIcon from "@/components/Icons/AddFavouritesIcon";
import { useFavourites } from '@/plugins/FavouritesContext';

interface CardData {
    id: string;
    date: string;
    name: string;
    description: string;
    image: any;
    addedAt?: string;
}

export default function SingleCard() {
    const { addFavourite, removeFavourite, isFavourite } = useFavourites();

    const getCurrentDate = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        return `${day}.${month}.${year}`;
    };

    const cardData = {
        id: '1',
        date: getCurrentDate(),
        name: 'Череп-копилка',
        description: 'Ты смотришь на очень амбициозную копилку в виде скелета, который держит чашу из... своих же костей? Очевидно, у него были очень конкретные карьерные цели после смерти — финансовый консультант из ада.',
        image: require('@/assets/images/history-image2.png')
    };

    const toggleFavourite = () => {
        if (isFavourite(cardData.id)) {
            removeFavourite(cardData.id);
        } else {
            const favouriteItem = {
                ...cardData,
                addedAt: new Date().toISOString()
            };
            addFavourite(favouriteItem);
        }
    };

    return (
        <View style={styles.card}>
            <View style={styles.headBlock}>
                <Pressable style={styles.addFavourites} onPress={toggleFavourite}>
                    {isFavourite(cardData.id) ? <AddedFavouritesIcon /> : <AddFavouritesIcon />}
                </Pressable>
                <Image
                    style={styles.imageBlock}
                    source={cardData.image}
                />
                <View>
                    <Text style={styles.date}>{cardData.date}</Text>
                    <Text style={styles.name}>{cardData.name}</Text>
                </View>
            </View>
            <View style={styles.textBlock}>
                <Text style={styles.textItem}>{cardData.description}</Text>
            </View>
        </View>
    );
}