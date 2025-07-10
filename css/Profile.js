import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

   pageContentItem: {
       gap: 50
   },
    profileBlock: {
        width: '100%'
    },
    title: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 25,
        color: '#000000',
        marginBottom: 15
    },
    bottomContent: {
       flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    description: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20,
        color: '#787878',
    },
    textBlock: {
       flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    profileButton: {
        width: 83,
        height: 30,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileButtonText: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20,
        color: '#FFFFFF',
    },
    deleteLink: {
        backgroundColor: '#B5473A'
    },
    doneLink: {
        backgroundColor: '#86B53A'
    },
    logoutLink: {
       backgroundColor: '#B5923A'
    }

});

export default styles;