/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';

 import React, {useEffect, useState } from 'react';
 import {StatusBar, PermissionsAndroid, Platform} from 'react-native';
// import Geolocation from '@react-native-community/geolocation';
//  import { withAuthenticator } from 'aws-amplify-react-native'
import * as Location from 'expo-location';
import Constants from 'expo-constants';
 
 import Router from './src/navigation/Root';
 
//  navigator.geolocation = require('@react-native-community/geolocation');
 
//  import Amplify from 'aws-amplify'
//  import config from './aws-exports'
//  Amplify.configure(config)
const App = () => {
// const App: () => React$Node = () => {


  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      let backPerm = await Location.requestBackgroundPermissionsAsync();
      // console.log(backPerm);
    })();
  }, []);



    // const androidPermission = async () => {
    //      try {
    //        const granted = await PermissionsAndroid.request(
    //          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //          {
    //            title: "SafeCarrier App Camera Permission",
    //            message:
    //              "SafeCarier App needs access to your location " +
    //              "so you can deliver packages flexibly.",
    //            buttonNeutral: "Ask Me Later",
    //            buttonNegative: "Cancel",
    //            buttonPositive: "OK"
    //          }
    //        );
    //        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //          console.log("You can use the location");
    //        } else {
    //          console.log("Location permission denied");
    //        }
    //      } catch (err) {
    //        console.warn(err);
    //      }
    //    }
     

  

  
   return (
     <>
       <StatusBar barStyle="light-content" />
       <Router />
     </>
   );
 };
 
 export default App;
 