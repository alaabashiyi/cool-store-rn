import React from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import Loader from '../../components/Loader/Loader';
import ProductItem from '../../components/ProductItem/ProductItem';
import styles from './style';

const data = [
    {
        "id": "GGOEAFKA087499",
        "name": "Android Small Removable Sticker Sheet",
        "description": "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
        "features": "8 Android stickers White colored sticker sheet",
        "price": "2.99",
        "keywords": "Android Small Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, small sticker sheet, android small sticker sheets, Android Sheet",
        "url": "Android+Small+Removable+Sticker+Sheet",
        "category": "accessories",
        "subcategory": "accessories"
    },
    {
        "id": "GGOEAFKA087599",
        "name": "Android Large Removable Sticker Sheet",
        "description": "Show your quirky side by placing these fun Android stickers on your personal belongings.",
        "features": "Android Stickers White Colored Sticker Sheet",
        "price": "2.99",
        "keywords": "Android Large Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, large sticker sheet, android large sticker sheets, Android Sheet",
        "url": "Android+Large+Removable+Sticker+Sheet",
        "category": "accessories",
        "subcategory": "accessories"
    },
    {
        "id": "GGOEGEBK094499",
        "name": "Google Bot",
        "description": "This Google Bot can hold multiple poses making it a fun toy for all. Fold the Google Bot back up into a perfect cube when you are done playing.",
        "features": "Made of wood 2.5 x 2.5 inch cube 6.75 inch tall Recommended for Ages 3+",
        "price": "9.99",
        "keywords": "Google Bot, google bot, bots, natural bots, wood bot, google wood bot",
        "url": "Google+Bot",
        "category": "accessories",
        "subcategory": "accessories"
    },
    {
        "id": "GGOEGFKA086699",
        "name": "Google Emoji Sticker Pack",
        "description": "Who doesn't use emojis? Decorate your space with your current mood!",
        "features": "Pack contains two sticker sheets Each Sheet has different emojis Decal dimensions should fit in a maximum sheet size of 12 3/4 x 17 1/2 inch.",
        "price": "4.99",
        "keywords": "Google Emoji Sticker Pack, Google sticker pack, emoji sticker pack, google emoji, stickers, pack of sticker, pack of emoji stickers",
        "url": "Google+Emoji+Sticker+Pack+2+sheet",
        "category": "accessories",
        "subcategory": "accessories"
    },
    {
        "id": "GGOEWCKQ085457",
        "name": "Waze Pack of 9 Decal Set",
        "description": "Can't decide which Waze decal to get? We have made that decision easier for you! Now you can purchase a pack of nine Waze Mood Decals!",
        "features": "Pack of 9 includes: 3 Waze Mood Happy decals 3 Waze Mood Original decals 3 Waze Mood Ninja decals",
        "price": "16.99",
        "keywords": "Waze Pack of 9 Decal Set, decals pack, packs of 9, Waze Packs, Waze Decals, waze, Waze",
        "url": "Waze+Pack+of+9+decal+set",
        "category": "accessories",
        "subcategory": "accessories"
    },
    {
        "id": "GGOEGHPB071610",
        "name": "Google Twill Cap",
        "description": "Classic urban styling distinguishes this Google cap. Retains its shape, even when not being worn.",
        "features": "Heavy weight brushed twill Adjustable velcro closure One size fits all",
        "price": "10.99",
        "keywords": "Google Twill Cap, Google Cap, Google Twill Caps, Google Twill, google cap, google caps, google twill, google twill black cap, google black caps, google caps, black caps, Google Caps",
        "url": "Google+Twill+Cap",
        "category": "apparel",
        "subcategory": "apparel"
    },
    {
        "id": "GGOEGHPJ094299",
        "name": "Google Fold-over Beanie Grey",
        "description": "Keep you ears warm while enjoying a cold winter day with this Google Fold-over Beanie.",
        "features": "100% acrylic One size fits all",
        "price": "9.99",
        "keywords": "Google Fold-over Beanie Grey, gray beanie, grey beanie, Google Beanies, Fold over grey, Google Beanie Grey, Google headgear",
        "url": "Google+Fold+over+beanie+grey",
        "category": "apparel",
        "subcategory": "apparel"
    },
    {
        "id": "GGOEGHPJ094399",
        "name": "Google Pom Beanie Charcoal",
        "description": "Stay stylish and warm this winter season with this Google Pom Beanie.",
        "features": "Thick knit texture outside Soft plush inside Faux fur pom on top",
        "price": "19.99",
        "keywords": "Google Pom Beanie Charcoal, pom beanie, charcoal pom beanies, Google Beanies, Pom Beanies, charcoal Google pom, beanies, headgear",
        "url": "Google+Pom+Beanie+Charcoal",
        "category": "apparel",
        "subcategory": "apparel"
    },
    {
        "id": "GGOEWXXX0827",
        "name": "Waze Women's Short Sleeve Tee",
        "description": "Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.",
        "features": "Jersey knit 37.5% cotton, 50% polyester, 12.5% rayon Made in the USA",
        "price": "18.99",
        "keywords": "Waze Women's Short Sleeve Tee, Waze Short Sleeve Tee, Waze Women's Tees, Waze Women's tee, waze ladies tees, waze ladies tee, waze short sleeve tees, waze short sleeve tee",
        "url": "Waze+Womens+Short+Sleeve+Tee",
        "category": "apparel",
        "subcategory": "apparel"
    },
    {
        "id": "GGOEWXXX0828",
        "name": "Waze Men's Short Sleeve Tee",
        "description": "Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.",
        "features": "Jersey knit 37.5% cotton, 50% polyester, 12.5% rayon Made in the USA",
        "price": "18.99",
        "keywords": "Waze Men's Short Sleeve Tee, Waze Short Sleeve Tee, Waze Men's Tees, Waze Men's tee, waze mens tees, waze mens tee, waze short sleeve tees, waze short sleeve tee",
        "url": "Waze+Mens+Short+Sleeve+Tee",
        "category": "apparel",
        "subcategory": "apparel"
    }
];

const HomeScreen = ({ navigation }) => {

    const renderItem = ({ item }) => <ProductItem onPress={() => navigation.navigate('ProductScreen', {
        item
    })} item={item} />

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Home screen is here</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListFooterComponent={<Loader />}
            />
        </SafeAreaView >
    )
};

export default HomeScreen