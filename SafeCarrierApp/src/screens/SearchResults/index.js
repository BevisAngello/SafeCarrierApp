import React from 'react';
import {View, Dimensions} from 'react-native';
import RouteMap from "../../components/RouteMap";
import UberTypes from "../../components/UberTypes";

import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const SearchResults = (props) => {
  const route = useRoute();

  console.log(route.params);
  const {originPlace, destinationPlace} = route.params

  return (
    <ScrollView>
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 300}}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>

      <View style={{height: 300}}>
        <UberTypes />
      </View>
    </View>
    </ScrollView>
  );
};

export default SearchResults;
