import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    textInputContainer: {
        paddingLeft: 10,
        width: width - 50,
        height: 42,

        // borderWidth: 1,
        // borderColor: '#000'
    },
    textInput: {
        fontSize: 16,
        borderColor: 'rgba(0,0,0,.2)',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        lineHeight: 20
    },
    icon: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;