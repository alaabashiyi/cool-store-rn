import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
    },
    contentContainerStyle: { flexGrow: 1, justifyContent: 'space-between' },
    upperContent: { flex: 1, justifyContent: 'flex-start' },
    bottomContent: { flex: 1, justifyContent: 'flex-end' },
    header: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(171, 183, 183, .5)',
        flex: 1
    },
    image: {
        resizeMode: 'cover', width: '100%',
    },
    price: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceFont: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    discount: {
        textDecorationLine: 'line-through',
        fontSize: 11,
        color: 'rgba(46, 49, 49, .5)',
        fontWeight: 'bold',
    },
    name: {
        flex: 5,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    nameText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'rgba(46, 49, 49, 1)',
    },
    description: {
        flex: 1,
        padding: 12,
    },
    descriptionTitle: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    descriptionContent: {
        paddingTop: 10,
        fontSize: 14,
        lineHeight: 15,
    },
});


export default styles;