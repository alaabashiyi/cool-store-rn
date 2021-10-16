import React, { useState, useRef, useEffect } from 'react'
import { View, TouchableOpacity, TextInput, Animated, Dimensions, Easing } from 'react-native'
import { SearchIcon, XCircleIcon } from "react-native-heroicons/outline";
import styles from './style';
const { width, height } = Dimensions.get('window');

const SearchInput = ({ searchValue, setSearchValue }) => {
    const [showSearch, setShowSearch] = useState(false);
    const transition = useRef(new Animated.Value(width)).current;


    const showSearchbar = () => {
        Animated.spring(transition, {
            toValue: showSearch ? width : 0,
            useNativeDriver: true,
            easing: Easing.ease,
            duration: 200,
        }).start();

        if (showSearch) {
            setSearchValue('')
        }
    }

    return (
        <View style={styles.container}>
            <Animated.View
                style={
                    [styles.textInputContainer,
                    {
                        transform: [
                            { translateX: transition },
                        ],
                        // opacity: transition.interpolate({
                        //     inputRange: [0, 100],
                        //     outputRange: [1, 0],
                        //     extrapolateLeft: 'clamp',
                        //     extrapolateRight: 'clamp',
                        // })
                    }]}
            >
                <TextInput placeholder="Search..." placeholderTextColor={'rgba(0,0,0,.2)'} style={styles.textInput} value={searchValue} onChangeText={setSearchValue} inlineImageLeft="search_icon" />
            </Animated.View>
            <TouchableOpacity
                activeOpacity={.6}
                onPress={() => {
                    setShowSearch(prev => !prev)
                    showSearchbar()
                }}
                style={styles.icon}>
                {!showSearch ? <SearchIcon /> : <XCircleIcon />}
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput
