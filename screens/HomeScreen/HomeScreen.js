import React, { useEffect, useState, useRef } from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction, searchDataAction } from '../../actions/mainActions';
import ProductList from '../../components/ProductList/ProductList';
import SearchInput from '../../components/SearchInput/SearchInput';
import useDebounce from '../../hooks/useDebounce';
import { selectProducts, selectPages, selectResults } from '../../selectors/mainSelectors';
import { resetData } from '../../slices/mainSlice';
import styles from './style';

const HomeScreen = ({ navigation }) => {
    const [searchValue, setSearchValue] = useState('');
    const page = useRef({ pageNum: 1 });
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const pages = useSelector(selectPages);
    const results = useSelector(selectResults);

    const reset = () => {
        dispatch(resetData());
    }
    const debounce = useDebounce(searchValue, reset, 500);

    const handleData = async (pageNum, keyword) => {
        dispatch(getDataAction({ page: pageNum, keyword }));
    }

    const searchData = (pageNum, keyword) => {
        page.current.pageNum = 1;
        searchValue !== '' && dispatch(searchDataAction({ page: pageNum, keyword }));
    }


    useEffect(() => {
        if (debounce === '') {
            handleData(1, '');
        } else if (debounce !== '') {
            searchData(1, debounce);
        }
    }, [debounce]);

    console.log('Products', products.length);
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Home screen - search your items today</Text>
            {debounce !== '' && <Text style={styles.text}>{results} found</Text>}
            <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} debounce={debounce} />
            <ProductList
                navigation={navigation}
                products={products}
                handleData={handleData}
                debounce={debounce}
                pages={pages}
                page={page}
            />
        </SafeAreaView >
    )
};

export default HomeScreen