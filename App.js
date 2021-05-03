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
import AppointmentDate from "./src/screens/appointment-date/appointment-date";
import AppointmentInfo from "./src/screens/appointment-info/appointment-info";
import AppointmentConfirmed from "./src/screens/appointment-confirmed/appointment-confirmed";
import AppointmentPayment from "./src/screens/appointment-payment/appointment-payment";
import ProReview from "./src/screens/pro-review/pro-review";

// @ts-ignore
const App: () => Node = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Professionals">
          <Stack.Screen
            name="Professionnals"
            component={ProListing}
            options={{
            title: 'Find professionnals',
            headerTitleStyle: {
              fontFamily: 'Poppins-SemiBold',
              fontSize: 25,
              letterSpacing: 0.12, },
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProProfile}
            options={{
            title: '',
            headerStyle: {
              backgroundColor: '#4EBDD6',
              headerTintColor: '#FFFFFF'},
            }}
          />
          <Stack.Screen
            name="Reviews"
            component={ProAllReviews}
            options={{
            title: '',
            headerStyle: {
              backgroundColor: '#4EBDD6',
              headerTintColor: '#FFFFFF'},
            }}
          />
          <Stack.Screen
            name="Appointment-date"
            component={AppointmentDate}
            options={{
            title: 'Pick up date & time',
            headerTitleStyle: {
              fontFamily: 'Poppins-SemiBold',
              fontSize: 25,
              letterSpacing: 0.12, },
            headerStyle: {
              backgroundColor: '#FFFFFF'},
            }}
          />
          <Stack.Screen
            name="Appointment-info"
            component={AppointmentInfo}
            options={{
            title: 'Personal information',
            headerTitleStyle: {
              fontFamily: 'Poppins-SemiBold',
              fontSize: 25,
              letterSpacing: 0.12, },
            headerStyle: {
              backgroundColor: '#FFFFFF'},
            }}
          />
          <Stack.Screen
            name="Appointment-payment"
            component={AppointmentPayment}
            options={{
            title: 'Payment',
            headerTitleStyle: {
              fontFamily: 'Poppins-SemiBold',
              fontSize: 25,
              letterSpacing: 0.12, },
            headerStyle: {
              backgroundColor: '#4EBDD6',
              headerTintColor: '#FFFFFF'},
            }}
          />
          <Stack.Screen
            name="Appointment-confirmed"
            component={AppointmentConfirmed}
            options={{
            title: 'Payment',
            headerTitleStyle: {
              fontFamily: 'Poppins-SemiBold',
              fontSize: 25,
              letterSpacing: 0.12, },
            headerStyle: {
              backgroundColor: '#4EBDD6',
              headerTintColor: '#FFFFFF'},
            }}
          />
          <Stack.Screen
            name="Pro-review"
            component={ProReview}
            options={{
            title: '',
            headerStyle: {
              backgroundColor: '#4EBDD6'},
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )}
export default App;
