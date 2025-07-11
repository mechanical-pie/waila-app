import {Dimensions, StyleSheet} from "react-native";

const { width, height } = Dimensions.get('window');

const getPadding = () => {
    if (width <= 360) return 20;
    return 30;
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000',
        position: 'relative',
    },
    camera: {
        flex: 1,
    },
    photoContainer: {
        width: '100%',
        height: height * 0.4,
        paddingHorizontal: getPadding()
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: getPadding(),
        marginBottom: 30,
        marginHorizontal: getPadding(),
    },
    flipButton: {
        width: 83,
        height: 50,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: '#83AB43',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flashButton: {
        width: 83,
        height: 50,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: '#83AB43',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        top: 0
    },
    flashButtonText: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 30,
        color: '#FFFFFF'
    },
    flipButtonText: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 30,
        color: '#FFFFFF'
    },
    backButton: {
        width: 83,
        height: 50,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: '#83AB43',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButtonText: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 30,
        color: '#FFFFFF'
    },
    captureButton: {
        width: 62,
        height: 62,
        borderRadius: 31,
        borderWidth: 5,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallCaptureButton: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: '#ffffff'
    },
    photoControls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        left: 0,
        bottom: 0,
    },
    newpPhotoButton: {
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
    },
    newpPhotoButtonText: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 30,
        color: '#FFFFFF'
    },
    notification: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -100 }, { translateY: -25 }],
        width: 200,
        height: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    notificationText: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 30,
        color: '#FFFFFF'
    },
    headerBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 13,
        paddingHorizontal: getPadding(),
        paddingTop: 30
    },
    headerBlockText: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 30,
        color: '#000000'
    },
    saveButton: {
        width: 83,
        height: 30,
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
    saveButtonText: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 30,
        color: '#FFFFFF'
    },
    buttonContainerItem: {
        alignItems: 'center',
        flexDirection : 'row',
        justifyContent: 'center',
        marginTop: 20
    }

});

export default styles;