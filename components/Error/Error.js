import React from 'react'
import { View, Image, Dimensions } from 'react-native'
const { width } = Dimensions.get('window');
const idkImage = 'https://miro.medium.com/max/800/0*n-TMgnZu3nGcKLYz.jpg';


const Error = () => {
    return (
        <View style={{ flex: 1 }}>
            <Image
                source={{ uri: idkImage }}
                style={{ resizeMode: 'cover', width: '100%', height: width }}
            />
        </View>
    )
}

export default Error
