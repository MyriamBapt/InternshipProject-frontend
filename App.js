import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';

import { Provider } from 'react-redux';
import store from './src/store'

import ProListing from "./src/screens/pro-listing/pro-listing";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./src/router/navigation";
import ProProfile from "./src/screens/pro-profile/pro-profile";
import ProAllReviews from "./src/screens/pro-all-reviews/pro-all-reviews";

// @ts-ignore
const App: () => Node = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Professionals">
          <Stack.Screen name="Professionnals" component={ProListing} options={{ title: 'Find professionnals',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              letterSpacing: 0.12, }, }} />
          <Stack.Screen name="Profile" component={ProProfile} options={{ title: '',
            headerStyle: {
              backgroundColor: '#4EBDD6', },
            headerTintColor: '#fff',}}  />
          <Stack.Screen name="Reviews" component={ProAllReviews} options={{ title: '',
            headerStyle: {
              backgroundColor: '#4EBDD6', },
            headerTintColor: '#fff',}}  />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )}
export default App;
