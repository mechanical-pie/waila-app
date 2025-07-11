import React from 'react';
import globalStyles from "@/css/Constant";
import {StyleSheet, StatusBar, View, Pressable, Text} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";


const styles = StyleSheet.create({
    pageContentItem: {
        gap: 50
    },
    linkText: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 25,
        color: '#000000'
    },
});

export default function Legal() {

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
                    <View style={globalStyles.pageContent}>
                        <View style={styles.pageContentItem}>
                            <Pressable onPress={() => handlePress('PrivacyPolicy')}>
                                <Text style={styles.linkText}>Privacy Policy</Text>
                            </Pressable>
                            <Pressable onPress={() => handlePress('Terms')}>
                                <Text style={styles.linkText}>Terms And Conditions</Text>
                            </Pressable>
                        </View>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    );
}