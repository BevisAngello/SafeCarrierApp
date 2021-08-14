import React from "react";
import { View, Dimensions, ScrollView, StyleSheet, Pressable } from "react-native";

import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';

import Entypo from "react-native-vector-icons/Entypo";



function HomeScreen({ navigation }) {
  return (
    // <ScrollView>
    <View>
      <View style={{height: Dimensions.get('window').height - 300}}>
      
        <HomeMap/>
        
        

      {/*  Covid Message*/}
      {/* <View style={{height: Dimensions.get('window').height - 300}}> */}
      <CovidMessage />

      {/*  Bottom Comp*/}
      <HomeSearch />
      </View>
      <Pressable
        // onPress={() => console.warn('Hey')}
        onPress={() => navigation.toggleDrawer()}
        style={[styles.roundButton, {top: 10, left: 10}]}>
        <Entypo name={"menu"} size={24} color="#4a4a4a"/>
      </Pressable>
    </View>
    // </ScrollView>
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  roundButton: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
  },
  
});

