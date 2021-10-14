import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const Loader = () => {
    return (
        <View>
            <ActivityIndicator color="#aaa" size="large" />
        </View>
    )
}

export default Loader;