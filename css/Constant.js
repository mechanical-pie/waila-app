import {Dimensions, Platform, StyleSheet} from "react-native";

const { width, height } = Dimensions.get('window');

const getPaddingHorizontal = () => {
    if (width <= 360) return 15;
    return 20;
};

const getGapVertical = () => {
    if (width <= 360) return 20;
    return 30;
};

const globalStyles = StyleSheet.create({

    page: {
        position: "relative",
        flex: 1,
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        width: '100%',
        height: '100%'
    },
    pageContent: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingHorizontal: getPaddingHorizontal(),
        paddingTop: 30,
        paddingBottom: 60,
    },
    blockContent: {
        gap: getGapVertical(),
        flex: 1
    },
    scrollView: {
        ...Platform.select({
            ios: {
                overflow: 'hidden',
            },
            android: {
                overflow: 'hidden',
            },
        }),
    },

});

export default globalStyles;