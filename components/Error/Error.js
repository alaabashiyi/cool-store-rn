import React, { useEffect, useState } from 'react'
import { View, Image, Dimensions, Text } from 'react-native'
import Button from '../Button/Button';
import NetInfo from '@react-native-community/netinfo';
const { width } = Dimensions.get('window');
const idkImage = 'https://miro.medium.com/max/800/0*n-TMgnZu3nGcKLYz.jpg';
import { useDispatch } from 'react-redux';
import { getDataAction } from '../../actions/mainActions';

const Error = () => {
    const dispatch = useDispatch();
    const [isConnected, setIsConnected] = useState(null);

    useEffect(() => {
        const checkNetwork = (networkStatus) => {
            setIsConnected(networkStatus.isConnected);
        }
        NetInfo.addEventListener(checkNetwork);
    }, []);

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
            }}>
                {`Something went wrong! ${isConnected ? 'our server is having some issues!' : 'please check your network connection and try again'}`}</Text>
            <Button title="TRY AGAIN" onPress={() => dispatch(getDataAction({ page: 1, keyword: '' }))} />
        </View>
    )
}

export default Error
