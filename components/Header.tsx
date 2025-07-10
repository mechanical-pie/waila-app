import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from "react-native";
import styles from '@/css/Header';
import MenuIcon from "@/components/Icons/MenuIcon";
import MenuClose from "@/components/Icons/MenuClose"

interface HeaderProps {
    title?: string;
    onMenuToggle?: (isOpen: boolean) => void;
}

export default function Header({ title, onMenuToggle }: HeaderProps) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuPress = () => {
        const newState = !isMenuOpen;
        setIsMenuOpen(newState);
        onMenuToggle?.(newState);
    };

    return (
        <View style={styles.pageHeader}>
            <View style={styles.pageHeaderContent}>
                <View style={styles.leftPart}>
                    <View style={styles.logoBlock}>
                        <Text style={styles.logoText}>W</Text>
                    </View>
                    <Text style={styles.namePage}>{title}</Text>
                </View>
                <Pressable style={styles.menuButton} onPress={handleMenuPress}>
                    {isMenuOpen ? <MenuClose /> : <MenuIcon />}
                </Pressable>
            </View>
        </View>
    );
}