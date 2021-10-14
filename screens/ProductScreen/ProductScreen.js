import React from 'react'
import { View, Text, Image, Dimensions, Button, SafeAreaView, TouchableOpacity } from 'react-native'
import styles from './style'
import PRODUCT from '../../assets/images/product.png';
import { ShoppingBagIcon, ShareIcon } from "react-native-heroicons/outline";
import { HeartIcon as HeartIconOutline } from "react-native-heroicons/outline";

const { width, height } = Dimensions.get('window');

const ProductScreen = ({ item: { name, description, features, id, price = 0 } }) => {
    const discount = (price - (price / 10)).toFixed(2);
    return (
        <View style={styles.container}>
            <View>
                <Image source={PRODUCT} style={{ resizeMode: 'cover', width: '100%', height: height / 2 }} />
            </View>
            <View style={styles.actions}>

                <TouchableOpacity activeOpacity={.6}>
                    <HeartIconOutline color="red" />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.6}>
                    <ShoppingBagIcon />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.6}>
                    <ShareIcon />
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <View style={styles.name}>
                    {name && <Text style={styles.nameText}>{name}</Text>}
                </View>

                <View style={styles.price}>
                    <Text style={styles.discount}>{`$${discount}`}</Text>
                    <Text style={styles.priceFont}>{`$${price}`}</Text>
                </View>
            </View>
            <View style={styles.description}>
                <Text style={styles.descriptionTitle}>Description:</Text>
                <Text style={styles.descriptionContent}>{description}</Text>
            </View>
            <SafeAreaView>
                <TouchableOpacity style={styles.buyButton} activeOpacity={.7}>
                    <Text style={styles.buyButtonText}>BUY NOW</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

export default ProductScreen
