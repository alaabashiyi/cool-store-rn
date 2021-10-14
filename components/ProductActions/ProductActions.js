import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { ShoppingBagIcon, ShareIcon } from "react-native-heroicons/outline";
import { HeartIcon as HeartIconOutline } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";

import styles from './style';

const ProductActions = () => {
    const [like, setLike] = useState(false);
    return (
        <View style={styles.actions}>
            <TouchableOpacity activeOpacity={.6} onPress={() => setLike(prev => !prev)}>
                {like ? <HeartIcon color="red" /> : <HeartIconOutline color="red" />}
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.6}>
                <ShoppingBagIcon />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.6}>
                <ShareIcon />
            </TouchableOpacity>
        </View>
    )
}

export default ProductActions
