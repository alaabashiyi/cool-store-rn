import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buyButton: {
        backgroundColor: '#f194ff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    buyButtonText: {
        color: '#fff'
    },
});

export default styles;