import {Dimensions, StyleSheet} from "react-native";

const { width, height } = Dimensions.get('window');

const getGap = () => {
    if (width <= 360) return 20;
    return 30;
};

const styles = StyleSheet.create({

    pageContentItem: {
        gap: getGap()
    },
    pinnedImage: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginRight: 20,
    },
    pinnedDate: {
        marginBottom: 8,
        fontFamily: 'RobotoCondensed',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        color: '#000000',
    },
    pinnedName: {
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
        paddingHorizontal: 20,
    },
    textItem: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        color: '#747474',
    },
    addFavourites: {
        position: 'absolute',
        top: 10,
        right: 8,
        zIndex: 1
    },
    card: {
        gap: 20
    },
    headBlock: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    },
    emptyText: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        color: '#747474',
        textAlign: 'center'
    },
    listContainer: {
        paddingBottom: 30,
    },
    cardContainer: {
        marginBottom: getGap(),
    },


});

export default styles;