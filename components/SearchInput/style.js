import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: width,
        marginVertical: 5,
    },
    textInputContainer: {
        paddingLeft: 10,
        width: width - 50,
        height: 42,
        width: width * 0.8,

    },
    textInput: {
        fontSize: 16,
        borderColor: 'rgba(0,0,0,.2)',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        lineHeight: 20,
        backgroundColor: 'rgba(0,0,0,.04)'
    },
    icon: {
        width: 43,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        position: 'absolute',
        top: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        left: ((width * 0.8) / 2) - (150 / 2),

    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default styles;