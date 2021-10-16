import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './style'

const Button = ({ title = 'Click', onPress, style }) => {
    return (
        <TouchableOpacity style={[styles.buyButton, { ...style }]} activeOpacity={.7} onPress={onPress}>
            <Text style={styles.buyButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button
