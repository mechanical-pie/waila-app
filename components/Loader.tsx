import React from 'react';
import {View, StyleSheet, useWindowDimensions, Text, TouchableOpacity, StatusBar} from 'react-native';
import Logo from "@/components/Logo/Logo";
import SignInButton from "@/components/SignInButton";

export default function Loader() {

    const {height, width} = useWindowDimensions();

    const styles = StyleSheet.create({

        loaderPage: {
            paddingTop: height * 0.2,
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            overflow: 'hidden',
            paddingBottom: 30,
            display: "flex",
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        logoContainer: {
            width: width * 0.4,
            alignItems: 'center'
        },
        loaderText: {
            fontFamily: 'Staatliches',
            fontWeight: '400',
            fontSize: 16,
            lineHeight: 20,
            color: '#000000',
            width: 129,
            marginBottom: height * 0.08,
            textAlign: 'center'
        },
        loaderBottomBlock: {
            alignItems: 'center'
        },
        loaderLink: {
            fontFamily: 'Roboto',
            fontWeight: '400',
            fontSize: 16,
            lineHeight: 19,
            color: '#83AB43',
        }

    });


    return (
        <View style={styles.loaderPage}>
            <StatusBar
                backgroundColor="#ffffff"
                translucent
                barStyle="dark-content"
            />
            <View style={styles.logoContainer}>
                <Logo />
            </View>
            <View style={styles.loaderBottomBlock}>
                <SignInButton />
                <Text style={styles.loaderText}>A Smart LOOK THROUGH YOUR CAMERA</Text>
                <TouchableOpacity>
                    <Text style={styles.loaderLink}>Privacy Policy</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};