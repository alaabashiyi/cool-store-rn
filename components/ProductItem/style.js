import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        borderWidth: 1,
        borderColor: 'rgba(228, 233, 237, 1)',
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: 'rgba(1,1,1,.7)',
        shadowOffset: {
            width: 0,
            height: 25,
        },
        shadowOpacity: .3,
        shadowRadius: 25
    },
    touchContainer: {

    },
    image: {
        resizeMode: 'cover',
        width: 120,
        height: '100%',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    info: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        // borderWidth: 1,
        // borderColor: '#000',
        paddingHorizontal: 10,
        height: 80,
    },
    desc: {
        flex: 1,
        justifyContent: "space-around",
        paddingRight: 15,
    },
    price: {
        justifyContent: 'center',
    },
    priceTag: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'rgba(83, 51, 237, 1)',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#000',
    },
    features: {
        fontSize: 12,
        color: 'rgba(108, 122, 137, .6)',
    },
});

export default styles;