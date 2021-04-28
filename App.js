
import React from 'react';
import type {Node} from 'react';
import { Text, View } from "react-native";
import ProListing from "./src/screens/pro-listing/pro-listing";

const App: () => Node = () => {

  return (
    <View>
    <Text>C'est en travaux, ça arrive !</Text>
      <ProListing/>
    </View>
  )}
export default App;
