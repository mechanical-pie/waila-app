import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from "react-native";
import styles from '@/css/Preloader';

export default function Preloader() {
    // Создаем анимированные значения для каждого элемента
    const anim1 = useRef(new Animated.Value(0)).current;
    const anim2 = useRef(new Animated.Value(0)).current;
    const anim3 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Создаем последовательную анимацию
        const animation = Animated.loop(
            Animated.sequence([
                // Анимация первого элемента
                Animated.timing(anim1, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: false,
                }),
                Animated.timing(anim1, {
                    toValue: 0,
                    duration: 200,
                    delay: 300,
                    useNativeDriver: false,
                }),
                // Анимация второго элемента
                Animated.timing(anim2, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: false,
                }),
                Animated.timing(anim2, {
                    toValue: 0,
                    duration: 200,
                    delay: 300,
                    useNativeDriver: false,
                }),
                // Анимация третьего элемента
                Animated.timing(anim3, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: false,
                }),
                Animated.timing(anim3, {
                    toValue: 0,
                    duration: 200,
                    delay: 300,
                    useNativeDriver: false,
                }),
            ])
        );

        animation.start();

        return () => {
            animation.stop();
        };
    }, []);

    // Интерполяция цвета для каждого элемента
    const color1 = anim1.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(131, 171, 67, 0.5)', '#83AB43']
    });

    const color2 = anim2.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(131, 171, 67, 0.5)', '#83AB43']
    });

    const color3 = anim3.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(131, 171, 67, 0.5)', '#83AB43']
    });

    return (
        <View style={styles.preloader}>
            <Animated.View style={[styles.preloaderItem, { backgroundColor: color1 }]} />
            <Animated.View style={[styles.preloaderItem, { backgroundColor: color2 }]} />
            <Animated.View style={[styles.preloaderItem, { backgroundColor: color3 }]} />
        </View>
    );
}