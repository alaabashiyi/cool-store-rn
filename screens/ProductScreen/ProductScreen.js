import React from 'react'
import { View, Text, Image, Dimensions, ScrollView, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import styles from './style'
import PRODUCT from '../../assets/images/product.png';
import ProductActions from '../../components/ProductActions/ProductActions';
import BuyButton from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import { setLike } from '../../slices/mainSlice';


const { height } = Dimensions.get('window');
const labels = {
    desc: "Description",
    buy: "BUY NOW"
}

const ProductScreen = ({ navigation, route }) => {
    const { name = '', description = '', price = 0, id = '' } = route.params?.item;
    const discount = (price - (price / 10)).toFixed(2);
    const dispatch = useDispatch();
    const isLike = useSelector(state => state.main.likes.includes(id));

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
            <View style={styles.upperContent}>
                <View>
                    <Image source={PRODUCT} style={[styles.image, { height: height / 1.9 }]} />
                </View>
                <ProductActions isLike={isLike} like={() => dispatch(setLike(id))} />
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
                    <BuyButton title={labels.buy} onPress={() => console.log(labels.buy)} />
                </SafeAreaView>
            </View>
            <BackButton onPress={() => navigation.goBack()} top={50} size={35} left={20} color="black" />
        </ScrollView>
    )
}

export default ProductScreen;
