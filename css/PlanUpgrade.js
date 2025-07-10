import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    pageContentItem: {
        gap: 30
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
    title: {
        marginBottom: 40,
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 25,
        color: '#000000'
    },
    plansBlock: {
        gap: 15
    },
    headBlock: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    namePlan: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20,
        color: '#000000'
    },
    rightData: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20,
    },
    pricePlans: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20,
        color: '#000000'
    },
    plansButton: {
        width: 83,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#86B53A',
        borderRadius: 10
    },
    buttonText: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20,
        color: '#ffffff',
    },
    buttonTextActive: {
        color: '#959595',
    },
    activeButton: {
        backgroundColor: '#D5D5D5'
    },
    description: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        color: '#787878',
    },
    textContainer: {
        paddingVertical: 20
    }

});

export default styles;