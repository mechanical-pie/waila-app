import React from 'react';
import globalStyles from "@/css/Constant";
import {StatusBar, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

export default function Legal() {
    // @ts-ignore
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

                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    );
}