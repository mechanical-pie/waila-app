import React from 'react';
import { View, useWindowDimensions, Pressable, Text, Animated } from "react-native";
import styles from '@/css/Menu';
import {useNavigation} from "@react-navigation/native";

interface MenuProps {
    isOpen: boolean;
}

export default function Menu({ isOpen }: MenuProps) {

    const navigation = useNavigation();

    // @ts-ignore
    const handlePress = (menu) => {
        // @ts-ignore
        navigation.navigate(menu);
    };

    const { height } = useWindowDimensions();
    const menuHeight = height - 60;
    const animatedHeight = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        Animated.timing(animatedHeight, {
            toValue: isOpen ? menuHeight : 0,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [isOpen, menuHeight]);

    return (
        <Animated.View style={[styles.menu, { height: animatedHeight }]}>
            <View style={styles.menuItem}>
                <View style={styles.topMenu}>
                    <Pressable onPress={() => handlePress('History')}>
                        <Text style={styles.menuName}>History log</Text>
                    </Pressable>
                    <Pressable onPress={() => handlePress('Pinned')}>
                        <Text style={styles.menuName}>Pinned</Text>
                    </Pressable>
                </View>
                <View style={styles.bottomMenu}>
                    <Pressable onPress={() => handlePress('Legal')}>
                        <Text style={styles.menuName}>Legal</Text>
                    </Pressable>
                    <View style={styles.line}></View>
                    <Pressable onPress={() => handlePress('Profile')}>
                        <Text style={styles.menuName}>Profile</Text>
                    </Pressable>
                </View>
            </View>
        </Animated.View>
    );
}
