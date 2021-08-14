import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'


const TestScreen = () => {
 
  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.navigate('Home')
  }

  

  return (
      <View style={{marginTop: 5, justifyContent:'center'}}>

        <TouchableOpacity
        onPress={goToSearch}>
        <Text> We are testing  </Text>
        
        
        
        </TouchableOpacity>


      </View>
    
  );
};

export default TestScreen;
