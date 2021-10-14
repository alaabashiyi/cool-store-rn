import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import styles from './style';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Home screen is here</Text>
        </SafeAreaView>
    )
}

export default HomeScreen