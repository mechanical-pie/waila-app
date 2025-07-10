import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    buttonsBlock: {
        width: '100%',
        backgroundColor: '#ffffff',
        paddingTop: 30,
        paddingBottom: 30,
        paddingHorizontal: 20,
    },
    buttonsBlockItem: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    recButtonsBlockItem: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    button: {
        width: 114,
        height: 50,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: '#83AB43',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    backButton: {
        width: 80,
        height: 50,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: '#83AB43',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsText: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 30,
        color: '#FFFFFF'
    },
    recButtonBlock: {
        width: 215,
        height: 50,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: '#D9CD21',
        gap: 10
    },
    recButtonText: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 30,
        color: '#FFFFFF'
    },
    recButton: {
        width: 50,
        height: 50,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#83AB43',
        position: 'absolute',
        right: 0
    },
    recButtonSmall: {
        width: 16,
        height: 16,
        backgroundColor: '#ffffff'
    },
    textBlock: {
        width: '100%',
        backgroundColor: 'rgba(232, 220, 51, 0.13)',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginBottom: 30
    },
    textBlockItem: {
        fontFamily: 'RobotoCondensed',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        color: '#747474',
    },
    recordingActive: {
        backgroundColor: '#D93A21',
    }

});

export default styles;