import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import ProductScreen from './screens/ProductScreen/ProductScreen';
import { store } from './stores/store';

const fakeItem = {
  "id": "GGOEAFKA087499",
  "name": "Android Small Removable Sticker Sheet",
  "description": "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
  "features": "8 Android stickers White colored sticker sheet",
  "price": "2.99",
  "keywords": "Android Small Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, small sticker sheet, android small sticker sheets, Android Sheet",
  "url": "Android+Small+Removable+Sticker+Sheet",
  "category": "accessories",
  "subcategory": "accessories"
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#FFF',

  };

  return (
    <Provider store={store}>
      <View style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ProductScreen item={fakeItem} />
      </View>
    </Provider>
  );
};

export default App;
