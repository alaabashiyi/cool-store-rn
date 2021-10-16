import React, { useState, useRef, useEffect } from 'react'
import { View, TouchableOpacity, TextInput, Animated, Dimensions, Easing, Text, Keyboard } from 'react-native'
import { SearchIcon, XCircleIcon } from "react-native-heroicons/outline";
import styles from './style';
const { width, height } = Dimensions.get('window');

const SearchInput = ({ searchValue, setSearchValue }) => {
    const [showSearch, setShowSearch] = useState(false);
    const searchInput = useRef(null);
    const transition = useRef(new Animated.Value(width)).current;
    const titleTransition = useRef(new Animated.Value(50)).current;



    const showSearchbar = () => {
        if (searchValue === '') Keyboard.dismiss();
        if (searchValue !== '') {
            setSearchValue('');
            setShowSearch(false);
        }
        handleAnimation();
        if (!showSearch) searchInput.current.focus();

    }

    const handleSearchValue = (value) => {
        if (value === '') {
            setShowSearch(false);
            showSearchbar();
        }
        setSearchValue(value);
    }

    const handleAnimation = () => {
        Animated.spring(transition, {
            toValue: showSearch ? width : 0,
            useNativeDriver: true,
            easing: Easing.ease,
            duration: 350,
        }).start();

        Animated.spring(titleTransition, {
            toValue: showSearch ? 30 : -width,
            useNativeDriver: true,
            easing: Easing.ease,
            duration: 350,
        }).start();
    }

    return (
        <View style={styles.container}>
            <Animated.View
                style={
                    [styles.title,
                    {
                        transform: [
                            { translateX: titleTransition },
                        ],
                    }]}
            >
                <Text style={styles.titleText}>Product List</Text>
            </Animated.View>
            <Animated.View
                style={
                    [styles.textInputContainer,
                    {
                        transform: [
                            { translateX: transition },
                        ],
                    }]}
            >

                <TextInput
                    ref={searchInput}
                    placeholder="Search..."
                    placeholderTextColor={'rgba(0,0,0,.2)'}
                    style={styles.textInput}
                    value={searchValue}
                    onChangeText={handleSearchValue}
                // autoFocus={showSearch}

                />
            </Animated.View>
            <TouchableOpacity
                activeOpacity={.6}
                onPress={() => {
                    setShowSearch(prev => !prev)
                    showSearchbar()
                }}
                style={styles.icon}>
                {!showSearch && searchValue === '' ? <SearchIcon /> : <XCircleIcon />}
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput
