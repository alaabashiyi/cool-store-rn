import React from 'react'
import { FlatList } from 'react-native'
import ProductItem from '../ProductItem/ProductItem'
import Loader from '../Loader/Loader'

const ProductList = ({ navigation, products, pages, handleData, debounce, page }) => {
    const pageNumber = page?.current?.pageNum;
    const isLastPage = pageNumber === pages;
    const loadMoreProducts = () => {
        if (isLastPage) return
        if (debounce !== '') return
        handleData(pageNumber + 1, '')
        page.current.pageNum++;
    }

    const renderItem =
        ({ item }) =>
            <ProductItem onPress={() =>
                navigation.navigate('ProductScreen', {
                    item
                })} item={item} />;
    console.log({ page: page.current.pageNum, pages });
    return (
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListFooterComponent={isLastPage ? null : <Loader />}
            onEndReached={loadMoreProducts}
        />
    )
}

export default ProductList
