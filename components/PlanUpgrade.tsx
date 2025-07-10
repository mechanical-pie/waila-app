import React, {useEffect, useState} from 'react';
import globalStyles from "@/css/Constant";
import {Pressable, ScrollView, StatusBar, Text, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import styles from "@/css/PlanUpgrade";
import {useNavigation} from "@react-navigation/native";
import { PlanStorage } from '@/plugins/PlanStorage';

export default function PlanUpgrade() {

    const navigation = useNavigation();
    const [currentPlan, setCurrentPlan] = useState('FREE');

    useEffect(() => {
        const loadPlan = async () => {
            const savedPlan = await PlanStorage.loadPlan();
            setCurrentPlan(savedPlan);
        };
        loadPlan();
    }, []);

    // @ts-ignore
    const handlePress = (menu) => {
        // @ts-ignore
        navigation.navigate(menu);
    };

    // @ts-ignore
    const handleUpgrade = async (plan) => {
        await PlanStorage.savePlan(plan);
        setCurrentPlan(plan);
    };

    const handleDowngradeToFree = async () => {
        await PlanStorage.savePlan('FREE');
        setCurrentPlan('FREE');
    };

    // @ts-ignore
    const getButtonProps = (plan) => {
        const isCurrent = currentPlan === plan;
        return {
            buttonStyle: isCurrent ? [styles.plansButton, styles.activeButton] : styles.plansButton,
            textStyle: isCurrent ? [styles.buttonText, styles.buttonTextActive] : styles.buttonText,
            text: isCurrent ? 'Current' : plan === 'FREE' ? 'Select' : 'Upgrade',
            disabled: false
        };
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
                        <Pressable style={styles.backButton} onPress={() => handlePress('Profile')}>
                            <Text style={styles.backButtonText}>Back</Text>
                        </Pressable>
                        <ScrollView
                            bounces={false}
                            overScrollMode="never"
                            showsVerticalScrollIndicator={false}
                            alwaysBounceVertical={false}
                            style={globalStyles.scrollView}
                        >
                            <Text style={styles.title}>Plans</Text>
                            <View style={styles.pageContentItem}>

                                <View style={styles.plansBlock}>
                                    <View style={styles.headBlock}>
                                        <Text style={styles.namePlan}>FREE</Text>
                                        <View style={styles.rightData}>
                                            <Text style={styles.pricePlans}>$0</Text>
                                            <Pressable
                                                style={getButtonProps('FREE').buttonStyle}
                                                onPress={handleDowngradeToFree}
                                            >
                                                <Text style={getButtonProps('FREE').textStyle}>
                                                    {getButtonProps('FREE').text}
                                                </Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.description}>Three free requests a day. Limited history</Text>
                                    </View>
                                </View>

                                <View style={styles.plansBlock}>
                                    <View style={styles.headBlock}>
                                        <Text style={styles.namePlan}>PRO</Text>
                                        <View style={styles.rightData}>
                                            <Text style={styles.pricePlans}>$10 / month</Text>
                                            <Pressable
                                                style={getButtonProps('PRO').buttonStyle}
                                                onPress={() => handleUpgrade('PRO')}
                                            >
                                                <Text style={getButtonProps('PRO').textStyle}>
                                                    {getButtonProps('PRO').text}
                                                </Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.description}>Unlimited requests + 100Mb storage</Text>
                                    </View>
                                </View>

                                <View style={styles.plansBlock}>
                                    <View style={styles.headBlock}>
                                        <Text style={styles.namePlan}>Special</Text>
                                        <View style={styles.rightData}>
                                            <Text style={styles.pricePlans}>$20 / month</Text>
                                            <Pressable
                                                style={getButtonProps('Special').buttonStyle}
                                                onPress={() => handleUpgrade('Special')}
                                            >
                                                <Text style={getButtonProps('Special').textStyle}>
                                                    {getButtonProps('Special').text}
                                                </Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.description}>Unlimited request +</Text>
                                        <Text style={styles.description}>Free speech conversation +</Text>
                                        <Text style={styles.description}>1Gb storage</Text>
                                    </View>
                                </View>

                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    );
}