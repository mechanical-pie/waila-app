import React from 'react';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import globalStyles from "@/css/Constant";
import {StatusBar, View, FlatList, Dimensions} from "react-native";
import HistoryBlock from "@/components/Hystory/HystoryBlock";
import AskLookButtons from "@/components/AskLookButtons";

type HistoryItem = {
    id: string;
    source: any;
    title: string;
    description: string;
};

const { width, height } = Dimensions.get('window');

const getGapVertical = () => {
    if (width <= 360) return 20;
    return 30;
};


const historyItems: HistoryItem[] = [
    {
        id: '1',
        source: require('@/assets/images/history-image1.png'),
        title: 'Череп-копилка',
        description: 'Ты смотришь на очень амбициозную копилку в виде скелета, который держит чашу из... своих же костей? Очевидно, у него были очень конкретные карьерные цели после смерти — финансовый консультант из ада.'
    },
    {
        id: '2',
        source: require('@/assets/images/history-image2.png'),
        title: 'Dead mans fingers',
        description: 'Ты смотришь на очень амбициозную копилку в виде скелета, который держит чашу из... своих же костей? Очевидно, у него были очень конкретные карьерные цели после смерти — финансовый консультант из ада.'
    },
    {
        id: '3',
        source: require('@/assets/images/history-image1.png'),
        title: 'Череп-копилка',
        description: 'Ты смотришь на очень амбициозную копилку в виде скелета, который держит чашу из... своих же костей? Очевидно, у него были очень конкретные карьерные цели после смерти — финансовый консультант из ада.'
    },
    {
        id: '4',
        source: require('@/assets/images/history-image2.png'),
        title: 'Dead mans fingers',
        description: 'Ты смотришь на очень амбициозную копилку в виде скелета, который держит чашу из... своих же костей? Очевидно, у него были очень конкретные карьерные цели после смерти — финансовый консультант из ада.'
    },
    {
        id: '5',
        source: require('@/assets/images/history-image1.png'),
        title: 'Череп-копилка',
        description: 'Ты смотришь на очень амбициозную копилку в виде скелета, который держит чашу из... своих же костей? Очевидно, у него были очень конкретные карьерные цели после смерти — финансовый консультант из ада.'
    },
    {
        id: '6',
        source: require('@/assets/images/history-image2.png'),
        title: 'Dead mans fingers',
        description: 'Ты смотришь на очень амбициозную копилку в виде скелета, который держит чашу из... своих же костей? Очевидно, у него были очень конкретные карьерные цели после смерти — финансовый консультант из ада.'
    },
    {
        id: '7',
        source: require('@/assets/images/history-image2.png'),
        title: 'Dead mans fingers',
        description: 'Ты смотришь на очень амбициозную копилку в виде скелета, который держит чашу из... своих же костей? Очевидно, у него были очень конкретные карьерные цели после смерти — финансовый консультант из ада.'
    }
];

export default function History() {
    const renderItem = ({item}: {item: HistoryItem}) => (
        <HistoryBlock
            source={item.source}
            title={item.title}
            description={item.description}
        />
    );

    return (
        <View style={{flex: 1}}>
            <StatusBar
                backgroundColor="rgba(0,0,0,0.3)"
                translucent
                barStyle="light-content"
            />
            <SafeAreaProvider>
                <SafeAreaView style={[globalStyles.page, {flex: 1}]} edges={['top']}>
                        <FlatList
                            data={historyItems}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            contentContainerStyle={{
                                gap: getGapVertical(),
                                paddingVertical: 30,
                                paddingHorizontal: 20
                            }}
                            style={{flex: 1}}
                            showsVerticalScrollIndicator={false}
                            bounces={false}
                            overScrollMode="never"
                        />
                    <AskLookButtons />
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    );
}