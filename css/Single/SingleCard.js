import {Dimensions, StyleSheet} from "react-native";

const { width, height } = Dimensions.get('window');

const getPaddingHorizontal = () => {
    if (width <= 360) return 30;
    return 60;
};
const getPaddingVertical = () => {
    if (width <= 360) return 30;
    return 60;
};

const styles = StyleSheet.create({

    card: {
      gap: 20
    },
    headBlock: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    },
    imageBlock: {
        width: 70,
        height: 70,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    date: {
        marginBottom: 8,
        fontFamily: 'RobotoCondensed',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        color: '#000000',
    },
    name: {
        fontFamily: 'RobotoCondensed',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 28,
        color: '#000000',
    },
    textBlock: {
        width: '100%',
        backgroundColor: '#F6F6F6',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    textItem: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        color: '#747474'
    },
    addFavourites: {
        position: 'absolute',
        top: 10,
        right: 8
    }

});

export default styles;