import React from 'react';
import globalStyles from "@/css/Constant";
import {StatusBar, StyleSheet, View, Text, ScrollView, Pressable} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";

const styles = StyleSheet.create({
    pageContentItem: {
        gap: 20
    },
    pageText: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 25,
        color: '#000000'
    },
    backButton: {
        width: 80,
        height: 30,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: '#83AB43',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    backButtonText: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 30,
        color: '#FFFFFF'
    },
});

export default function PrivacyPolicy() {

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
                        <Pressable style={styles.backButton} onPress={() => handlePress('Legal')}>
                            <Text style={styles.backButtonText}>Back</Text>
                        </Pressable>
                        <ScrollView
                            bounces={false}
                            overScrollMode="never"
                            showsVerticalScrollIndicator={false}
                            alwaysBounceVertical={false}
                            style={globalStyles.scrollView}
                        >
                            <View style={styles.pageContentItem}>
                                <Text style={styles.pageText}>
                                    This Privacy Policy outlines how we collect, use, and protect
                                    your personal information. We are committed to ensuring that your privacy is safeguarded
                                    and that your data is handled in accordance with applicable laws and regulations.
                                </Text>
                                <Text style={styles.pageText}>
                                    We may collect information such as your name, email address, and usage data to enhance
                                    your experience with our services. We will not share your personal information with
                                    third parties without your consent, except as required by law or to provide our services
                                    effectively.
                                </Text>
                                <Text style={styles.pageText}>
                                    We implement a variety of security measures to maintain the safety of your personal
                                    information. These measures include encryption, access controls, and regular security
                                    audits to prevent unauthorized access. You have the right to access, correct, or delete
                                    your personal information at any time. If you have any questions or concerns about our
                                    Privacy Policy, please contact us directly, and we will be happy to assist you.
                                </Text>
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    );
}