import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { SearchIcon } from "react-native-heroicons/outline";
import styles from './style';

const SearchInput = ({ searchValue, setSearchValue }) => {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.textInputContainer}>
                {showSearch && <TextInput placeholder="Search..." placeholderTextColor={'rgba(0,0,0,.2)'} style={styles.textInput} value={searchValue} onChangeText={setSearchValue} inlineImageLeft="search_icon" />}
            </View>
            <View style={styles.icon}>
                <SearchIcon onPress={() => setShowSearch(prev => !prev)} />
            </View>
        </View>
    )
}

export default SearchInput
