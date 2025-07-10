import React, {useEffect, useState} from 'react';
import globalStyles from "@/css/Constant";
import {StatusBar, View, ScrollView, Text, Pressable} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import styles from "@/css/Profile";
import DeleteAccountModal from "@/components/Modals/DeleteAccountModal";
import InfoModal from "@/components/Modals/InfoModal";
import CleanModal from "@/components/Modals/CleanModal";
import LanguageModal from "@/components/Modals/LanguageModal";
import LogoutModal from "@/components/Modals/LogoutModal";
import GoogleIcon from "@/components/Icons/GoogleIcon";
import {useNavigation} from "@react-navigation/native";
import { PlanStorage } from '@/plugins/PlanStorage';
import { useUserStore } from "@/plugins/userStore";

export default function Profile() {
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);
    const [isCleanModalVisible, setIsCleanModalVisible] = useState(false);
    const [isLanguageModalVisible, setIsLanguageModalVisible] = useState(false);
    const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('English');

    const setEmail = useUserStore((state) => state.setEmail);

    const handleDeleteConfirm = () => {
        setIsDeleteModalVisible(false);
        setIsInfoModalVisible(true);
    };

    const handleLanguageSelect = React.useCallback((language: string) => {
        const languageName = language === 'english' ? 'English' : 'Russian';
        setCurrentLanguage(languageName);
    }, []);

    const navigation = useNavigation();

    // @ts-ignore
    const handlePress = (menu) => {
        // @ts-ignore
        navigation.navigate(menu);
    };

    const [currentPlan, setCurrentPlan] = useState('FREE');

    useEffect(() => {
        const loadPlan = async () => {
            const savedPlan = await PlanStorage.loadPlan();
            setCurrentPlan(savedPlan);
        };
        loadPlan();
        setEmail("maxsharlaev@gmail.com");
    }, [setEmail]);

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
                        <ScrollView
                            bounces={false}
                            overScrollMode="never"
                            showsVerticalScrollIndicator={false}
                            alwaysBounceVertical={false}
                            style={globalStyles.scrollView}
                        >
                            <View style={styles.pageContentItem}>

                                <View style={styles.profileBlock}>
                                    <Text style={styles.title}>Logged in as</Text>
                                    <View style={styles.bottomContent}>
                                        <View style={styles.textBlock}>
                                            <GoogleIcon />
                                            <Text style={styles.description}>
                                                maxsharlaev@gmail.com
                                            </Text>
                                        </View>
                                        <Pressable
                                            style={[styles.profileButton, styles.logoutLink]}
                                            onPress={() => setIsLogoutModalVisible(true)}
                                        >
                                            <Text style={styles.profileButtonText}>Log Out</Text>
                                        </Pressable>
                                    </View>
                                </View>

                                <View style={styles.profileBlock}>
                                    <Text style={styles.title}>Your plan</Text>
                                    <View style={styles.bottomContent}>
                                        <Text style={styles.description}>{currentPlan}</Text>
                                        <Pressable
                                            style={[styles.profileButton, styles.doneLink]}
                                            onPress={() => handlePress('PlanUpgrade')}
                                        >
                                            <Text style={styles.profileButtonText}>
                                                {currentPlan === 'FREE' ? 'Upgrade' : 'Change'}
                                            </Text>
                                        </Pressable>
                                    </View>
                                </View>

                                <View style={styles.profileBlock}>
                                    <Text style={styles.title}>PReferred language</Text>
                                    <View style={styles.bottomContent}>
                                        <Text style={styles.description}>{currentLanguage}</Text>
                                        <Pressable
                                            style={[styles.profileButton, styles.doneLink]}
                                            onPress={() => setIsLanguageModalVisible(true)}
                                        >
                                            <Text style={styles.profileButtonText}>Change</Text>
                                        </Pressable>
                                    </View>
                                </View>

                                <View style={styles.profileBlock}>
                                    <Text style={styles.title}>Storage</Text>
                                    <View style={styles.bottomContent}>
                                        <Text style={styles.description}>10Mb / 100mb</Text>
                                        <Pressable
                                            style={[styles.profileButton, styles.deleteLink]}
                                            onPress={() => setIsCleanModalVisible(true)}
                                        >
                                            <Text style={styles.profileButtonText}>Clean</Text>
                                        </Pressable>
                                    </View>
                                </View>

                                <View style={styles.profileBlock}>
                                    <Text style={styles.title}>Personal data / Account</Text>
                                    <View style={styles.bottomContent}>
                                        <Text style={styles.description}>Can be Wiped Out On Demand</Text>
                                        <Pressable
                                            style={[styles.profileButton, styles.deleteLink]}
                                            onPress={() => setIsDeleteModalVisible(true)}
                                        >
                                            <Text style={styles.profileButtonText}>Wipe Out</Text>
                                        </Pressable>
                                    </View>
                                </View>

                            </View>
                        </ScrollView>
                    </View>
                    <DeleteAccountModal
                        visible={isDeleteModalVisible}
                        onClose={() => setIsDeleteModalVisible(false)}
                        onConfirm={handleDeleteConfirm}
                    />
                    <InfoModal
                        visible={isInfoModalVisible}
                        onClose={() => setIsInfoModalVisible(false)}
                    />
                    <CleanModal
                        visible={isCleanModalVisible}
                        onClose={() => setIsCleanModalVisible(false)}
                    />
                    <LanguageModal
                        visible={isLanguageModalVisible}
                        onClose={() => setIsLanguageModalVisible(false)}
                        onLanguageSelect={handleLanguageSelect}
                        currentLanguage={currentLanguage.toLowerCase()}
                    />
                    <LogoutModal
                        visible={isLogoutModalVisible}
                        onClose={() => setIsLogoutModalVisible(false)}
                    />
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    );
}