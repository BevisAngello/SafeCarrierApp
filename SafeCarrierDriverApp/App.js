import 'react-native-gesture-handler';

import React, { useCallback, useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

import * as Location from 'expo-location';

import Router from './src/navigation/Root';

import * as SplashScreen from 'expo-splash-screen';

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import * as Sentry from 'sentry-expo';

Sentry.init({
    dsn: 'https://25a8c3e0c7c94b0fb1e985a334736088@o943972.ingest.sentry.io/5892946',
    enableInExpoDevelopment: true,
    debug: false, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
  });

const App = () => {
  // const [appIsReady, setAppIsReady] = useState(false);

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       // Keep the splash screen visible while we fetch resources
  //       await SplashScreen.preventAutoHideAsync();
  //       // Pre-load fonts, make any API calls you need to do here
  //       // await Font.loadAsync(Entypo.menu);
  //       // await Font.loadAsync(Ionicons.options);
  //       // Artificially delay for two seconds to simulate a slow loading
  //       // experience. Please remove this if you copy and paste the code!
  //       await new Promise(resolve => setTimeout(resolve, 2000));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       // Tell the application to render
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     // This tells the splash screen to hide immediately! If we call this after
  //     // `setAppIsReady`, then we may see a blank screen while the app is
  //     // loading its initial state and rendering its first pixels. So instead,
  //     // we hide the splash screen once we know the root view has already
  //     // performed layout.
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  // if (!appIsReady) {
  //   return null;
  // }

  
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
      console.log(backPerm);
    })();
  }, []);
  
  return (
   
    <>
      <StatusBar barStyle="dark-content" />
      
      <Router />
        {/* <HomeScreen /> */}
        {/* <Text>Yoyo</Text> */}
      
    </>
   
  );
};

export default App;