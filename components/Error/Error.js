import React from 'react'
import { View, Image, Dimensions, Text } from 'react-native'
import Button from '../Button/Button';
const { width } = Dimensions.get('window');
const idkImage = 'https://miro.medium.com/max/800/0*n-TMgnZu3nGcKLYz.jpg';
import { useDispatch } from 'react-redux';
import { getDataAction } from '../../actions/mainActions';

const Error = () => {
    const dispatch = useDispatch();

    return (
        <View style={{ flex: 1 }}>
            <Image
                source={{ uri: idkImage }}
                style={{ resizeMode: 'cover', width: '100%', height: width }}
            />
            <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                paddingHorizontal: 10,
                paddingVertical: 15,
                textAlign: 'center'
            }}>Something went wrong! it could be your internet connection or our server is having some issues!</Text>
            <Button title="TRY AGAIN" onPress={() => dispatch(getDataAction({ page: 1, keyword: '' }))} />
        </View>
    )
}

export default Error
