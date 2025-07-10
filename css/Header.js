import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    pageHeader: {
        width: '100%',
        height: 96,
        backgroundColor: '#83AB43',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    pageHeaderContent: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logoBlock: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.15)'
    },
    logoText: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 32,
        lineHeight: 40,
        color: '#FFFFFF',
    },
    leftPart: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20,
    },
    namePage: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 25,
        color: '#FFFFFF',
    },
    menuButton: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.15)'
    },

});

export default styles;