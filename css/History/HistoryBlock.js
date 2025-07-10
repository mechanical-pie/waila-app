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

    historyBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    imageBlock: {
        width: 100,
        height: 100,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    blockContent: {
        gap: 10,
        flex: 1
    },
    titleBlock: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 21,
        color: '#000000',
    },
    descriptionBlock: {
        fontFamily: 'RobotoCondensed',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 21,
        color: '#8F8F8F',
        flex: 1,
        flexWrap: 'wrap',
    }

});

export default styles;