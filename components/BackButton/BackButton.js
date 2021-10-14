import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import styles from './style';

const BackButton = ({ top, left, right, color, size, onPress }) => {
    return (
        <TouchableOpacity style={[styles.container, { top, left, right }]} activeOpacity={.5} onPress={onPress}>
            <ArrowLeftIcon color={color} size={size} />
        </TouchableOpacity>
    )
}

export default BackButton
