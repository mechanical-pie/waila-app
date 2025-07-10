import {Dimensions, StyleSheet} from "react-native";

const { width } = Dimensions.get('window');

const getGap = () => {
    if (width <= 360) return 20;
    return 30;
};

const getPaddingHorizontal = () => {
    if (width <= 360) return 15;
    return 20;
};

const styles = StyleSheet.create({

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(217, 217, 217, 0.81)',
        backfaceVisibility: 'hidden',
        willChange: 'transform, opacity'
    },
    modalView: {
        margin: 20,
        backgroundColor: '#ffffff',
        padding: 20,
        width: '90%',
    },
    modalText: {
        marginBottom: 30,
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 22,
        color: '#B5473A',
    },
    modalSubText: {
        marginBottom: 20,
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        color: '#000000',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10
    },
    button: {
        borderRadius: 10,
        width: 83,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancelButton: {
        backgroundColor: '#86B53A',
    },
    deleteButton: {
        backgroundColor: '#B5473A',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    radioCircle: {
        height: 22,
        width: 22,
        borderRadius: 11,
        borderWidth: 2,
        borderColor: '#6200ee',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    selectedRb: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#6200ee',
    },
    radioText: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        color: '#000000'
    },
    container: {
        marginBottom: 15,
        width: '100%',
    },

});

export default styles;