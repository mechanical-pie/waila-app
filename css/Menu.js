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

    menu: {
        width: '100%',
        overflow: 'hidden',
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 96,
        zIndex: 1
    },
    menuItem: {
        paddingVertical: getPaddingVertical(),
        paddingHorizontal: getPaddingHorizontal(),
        backgroundColor: '#556A33',
        height: '100%',
        justifyContent: 'space-between'
    },
    topMenu: {
        gap: 20,
    },
    menuName: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 30,
        color: '#FFFFFF',
    },
    bottomMenu: {
        gap: 30
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.21)'
    }

});

export default styles;