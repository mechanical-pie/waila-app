import {Dimensions,Platform, StyleSheet} from "react-native";

const { width, height } = Dimensions.get('window');

const getGap = () => {
    if (width <= 360) return 20;
    return 30;
};

const getPaddingHorizontal = () => {
    if (width <= 360) return 15;
    return 20;
};

const styles = StyleSheet.create({

    singleContent: {
        gap: getGap()
    },
    singleScrollView: {
        ...Platform.select({
            ios: {
                overflow: 'hidden',
            },
            android: {
                overflow: 'hidden',
            },
        }),
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
    pageContent: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingHorizontal: getPaddingHorizontal(),
        paddingTop: 30,
        paddingBottom: 0,
    }

});

export default styles;