import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import { Text, View } from "react-native";

import { Provider } from 'react-redux';
import store from './src/store'

import ProListing from "./src/screens/pro-listing/pro-listing";

// @ts-ignore
const App: () => Node = () => {

  return (
    <Provider store={store}>
      <View>
        <Text>C'est en travaux, ça arrive !</Text>
        <ProListing/>
      </View>
    </Provider>
  )}
export default App;
