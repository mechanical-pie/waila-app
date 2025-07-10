import React from 'react';
import {Text, StyleSheet, View, useWindowDimensions, Pressable} from 'react-native';
import LogoGoogle from "@/components/Logo/LogoGoogle";
import {useNavigation} from "@react-navigation/native";

export default function SignInButton() {

    const {height, width} = useWindowDimensions();

    const navigation = useNavigation();

    // @ts-ignore
    const handlePress = (menu) => {
        // @ts-ignore
        navigation.navigate(menu);
    };

    const styles = StyleSheet.create({

        sigInButton: {
            display: 'flex',
            alignItems: "center",
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 10,
            width: 150,
            height: 45,
            borderWidth: 1,
            borderColor: '#83AB43',
            borderStyle: 'solid',
            marginBottom: height * 0.1
        },
        sigInText: {
            fontFamily: 'Staatliches',
            fontWeight: '400',
            fontSize: 20,
            lineHeight: 25,
            color: '#83AB43',
        },
        logoContainer: {
            width: 24,
            height: 24,
        },

    });

    return (
        <Pressable style={styles.sigInButton} onPress={() => handlePress('History')}>
            <Text style={styles.sigInText}>
                Login with
            </Text>
            <View style={styles.logoContainer}>
                <LogoGoogle />
            </View>
        </Pressable>
    );
}