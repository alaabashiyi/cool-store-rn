import React from 'react'
import { View, Image, Dimensions } from 'react-native'
const { width } = Dimensions.get('window');
const idkImage = 'https://www.pngkey.com/png/detail/163-1639407_view-samegoogleiqdbsaucenao-1391950301682-don-t-know-meme-drawing.png';


const NoResults = () => {
    return (
        <View style={{ flex: 1 }}>
            <Image
                source={{ uri: idkImage }}
                style={{ resizeMode: 'cover', width: '100%', height: width / 1.5 }}
            />
        </View>
    )
}

export default NoResults
