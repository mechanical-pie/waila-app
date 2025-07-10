import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View} from 'react-native';
import 'react-native-reanimated';
import React, { useEffect, useState } from 'react';
import Loader from "@/components/Loader";
import History from "@/components/History";
import Shoot from "@/components/Shoot";
import Layout from "@/components/Layout";
import Single from "@/components/Single";
import Profile from "@/components/Profile";
import Legal from "@/components/Legal";
import Pinned from "@/components/Pinned";
import PlanUpgrade from "@/components/PlanUpgrade";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

type ScreenType = {
    name: string;
    component: React.ComponentType<any>;
};

export default function RootLayout() {
    const [isReady, setReady] = useState(false);
    const [fontsLoaded, fontError] = useFonts({
        Roboto: require('../assets/fonts/Roboto-Regular.ttf'),
        RobotoCondensed: require('../assets/fonts/RobotoCondensed-Regular.ttf'),
        Staatliches: require('../assets/fonts/Staatliches-Regular.ttf'),
    });

    useEffect(() => {
        const prepare = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (e) {
                console.warn(e);
            } finally {
                if (fontsLoaded) {
                    await SplashScreen.hideAsync();
                    setReady(true);
                }
            }
        };

        prepare();
    }, [fontsLoaded]);

    if (!isReady) {
        return null;
    }

    return (
        <View style={{ height: '100%' }}>
            <Stack.Navigator
                initialRouteName="Loader"
                screenOptions={{
                    animation: 'fade',
                    headerShown: false,
                    contentStyle: { backgroundColor: '#ffffff' },
                }}
            >
                <Stack.Screen name="Loader" component={Loader} />
                <Stack.Screen name="History">
                    {() => (
                        <Layout title="History Log">
                            <History />
                        </Layout>
                    )}
                </Stack.Screen>
                <Stack.Screen name="Shoot">
                    {() => (
                        <Layout title="Shoot">
                            <Shoot />
                        </Layout>
                    )}
                </Stack.Screen>
                <Stack.Screen name="Single" >
                    {() => (
                        <Layout title="Single">
                            <Single />
                        </Layout>
                    )}
                </Stack.Screen>
                <Stack.Screen name="Profile" >
                    {() => (
                        <Layout title="Profile">
                            <Profile />
                        </Layout>
                    )}
                </Stack.Screen>
                <Stack.Screen name="Legal" >
                    {() => (
                        <Layout title="Legal">
                            <Legal />
                        </Layout>
                    )}
                </Stack.Screen>
                <Stack.Screen name="Pinned" >
                    {() => (
                        <Layout title="Pinned">
                            <Pinned />
                        </Layout>
                    )}
                </Stack.Screen>
                <Stack.Screen name="PlanUpgrade" >
                    {() => (
                        <Layout title="Plan Upgrade">
                            <PlanUpgrade />
                        </Layout>
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </View>
    );
}