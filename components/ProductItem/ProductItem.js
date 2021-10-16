import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import PRODUCT from '../../assets/images/product.png';
import styles from './style'

const ProductItem = ({ item: { name, features, price }, onPress, sizes: { CARD_SIZE, SPACING } }) => {
    return (
        <TouchableOpacity activeOpacity={.9} onPress={onPress} className={styles.touchContainer}>
            <View style={[styles.container, { height: CARD_SIZE, margin: SPACING }]}>
                <View>
                    <Image source={PRODUCT} style={styles.image} />
                </View>
                <View style={styles.info}>
                    <View style={styles.desc}>
                        <Text style={styles.name}>{name}</Text>
                        <Text numberOfLines={2} ellipsizeMode='tail' style={styles.features}>{features}</Text>
                    </View>

                    <View style={styles.price}>
                        <Text style={styles.priceTag}>{`$${price}`}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductItem
