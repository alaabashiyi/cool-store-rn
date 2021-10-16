import React, { useRef } from 'react'
import { Animated, Text } from 'react-native'
import ProductItem from '../ProductItem/ProductItem'
import Loader from '../Loader/Loader'
import NoResults from '../NoResults/NoResults';
import { selectError, selectIsLoading } from '../../selectors/mainSelectors';
import { useSelector } from 'react-redux';
import Error from '../Error/Error';

const SPACING = 10;
const CARD_SIZE = 80;
const ITEM_SIZE = CARD_SIZE + SPACING * 2;

const ProductList = ({ navigation, products, pages, handleData, debounce, page }) => {
    const scrollY = useRef(new Animated.Value(0)).current;
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);
    const pageNumber = page?.current?.pageNum;
    const isLastPage = pageNumber === pages;
    const loadMoreProducts = () => {
        if (isLastPage) return
        if (debounce !== '') return
        handleData(pageNumber + 1, '')
        page.current.pageNum++;
    }

    const renderItem =
        ({ item, index }) => {
            const inputRange = [
                -1,
                0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index + 2)
            ];
            const opacityInputRange = [
                -1,
                0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index + .9)
            ];
            const scale = scrollY.interpolate({
                inputRange,
                outputRange: [1, 1, 1, 0]
            });
            const opacity = scrollY.interpolate({
                inputRange: opacityInputRange,
                outputRange: [1, 1, 1, 0]
            });

            return (
                <Animated.View style={{
                    transform: [{ scale }],
                    opacity
                }}>
                    <ProductItem
                        sizes={{ CARD_SIZE, SPACING }}
                        onPress={() =>
                            navigation.navigate('ProductScreen', {
                                item
                            })} item={item}
                    />
                </Animated.View>
            )
        };

    if (error) return <Error />
    if (products.length === 0 && pages === 0) return <NoResults />;

    return (
        <Animated.FlatList
            data={products}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true }
            )}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListFooterComponent={isLastPage ? null : <Loader />}
            onEndReached={loadMoreProducts}
        />
    )
}

export default ProductList
