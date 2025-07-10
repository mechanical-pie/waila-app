import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    preloader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    preloaderItem: {
        width: 20,
        height: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },


});

export default styles;