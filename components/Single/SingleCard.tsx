import React, {useState} from 'react';
import {Image, View, Text, Pressable} from "react-native";
import styles from '@/css/Single/SingleCard';
import AddedFavouritesIcon from "@/components/Icons/AddedFavouritesIcon";
import AddFavouritesIcon from "@/components/Icons/AddFavouritesIcon";

export default function SingleCard() {

    const [isFavourite, setIsFavourite] = useState(false);

    const toggleFavourite = () => {
        setIsFavourite(!isFavourite);
    };

    return (
        <View style={styles.card}>
            <View style={styles.headBlock}>
                <Pressable style={styles.addFavourites}  onPress={toggleFavourite}>
                    {isFavourite ? <AddedFavouritesIcon /> : <AddFavouritesIcon />}
                </Pressable>
                <Image
                    style={styles.imageBlock}
                    source={require('@/assets/images/history-image2.png')}
                />
                <View>
                    <Text style={styles.date}>13.05.2025</Text>
                    <Text style={styles.name}>Череп-копилка</Text>
                </View>
            </View>
            <View style={styles.textBlock}>
                <Text style={styles.textItem}>Ты смотришь на очень амбициозную копилку в виде скелета, который держит
                    чашу из... своих же костей? Очевидно, у него были очень конкретные карьерные цели после смерти —
                    финансовый консультант из ада.
                </Text>
            </View>
        </View>
    );
}