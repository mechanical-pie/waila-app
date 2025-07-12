import { useCallback, useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import Loader from "@/components/Loader";

// Предотвращаем автоматическое скрытие
SplashScreen.preventAutoHideAsync();

export default function Splash() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // Скрываем нативный Splash Screen
            await SplashScreen.hideAsync();  // ← Исправлено!
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;  // Показываем пустой экран до готовности
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }} edges={['top']}>
                <View style={styles.splashContent} onLayout={onLayoutRootView}>
                    <Image
                        style={styles.splashImage}
                        source={require('@/assets/splash-logo.png')}  // Путь должен совпадать с app.json
                    />
                    <Loader />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    splashContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    splashImage: {
        width: 132,
        height: 181,
    },
});