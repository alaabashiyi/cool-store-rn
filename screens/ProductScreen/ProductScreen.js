import React from 'react'
import { View, Text, Image, Dimensions, ScrollView, SafeAreaView } from 'react-native'
import styles from './style'
import PRODUCT from '../../assets/images/product.png';
import ProductActions from '../../components/ProductActions/ProductActions';
import BuyButton from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';


const { width, height } = Dimensions.get('window');
const labels = {
    desc: "Description",
    buy: "BUY NOW"
}

const fakeItem = {
    "id": "GGOEAFKA087499",
    "name": "Android Small Removable Sticker Sheet",
    "description": "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
    "features": "8 Android stickers White colored sticker sheet",
    "price": "2.99",
    "keywords": "Android Small Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, small sticker sheet, android small sticker sheets, Android Sheet",
    "url": "Android+Small+Removable+Sticker+Sheet",
    "category": "accessories",
    "subcategory": "accessories"
};

const ProductScreen = ({ navigation, route }) => {
    const { name = '', description = '', price = 0 } = route.params?.item;
    const discount = (price - (price / 10)).toFixed(2);
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
            <View style={styles.upperContent}>
                <View>
                    <Image source={PRODUCT} style={[styles.image, { height: height / 1.9 }]} />
                </View>
                <ProductActions />
                <View style={styles.header}>
                    <View style={styles.name}>
                        <Text style={styles.nameText}>{name}</Text>
                    </View>

                    <View style={styles.price}>
                        <Text style={styles.discount}>{`$${price}`}</Text>
                        <Text style={styles.priceFont}>{`$${discount}`}</Text>
                    </View>
                </View>
                <View style={styles.description}>
                    <Text style={styles.descriptionTitle}>{labels.desc}</Text>
                    <Text style={styles.descriptionContent}>{description}</Text>
                </View>
            </View>

            <View style={styles.bottomContent}>
                <SafeAreaView>
                    <BuyButton title={labels.buy} onPress={() => console.log('BUY NOW')} />
                </SafeAreaView>
            </View>
            <BackButton onPress={() => navigation.goBack()} top={50} size={35} left={20} color="black" />
        </ScrollView>
    )
}

export default ProductScreen;
