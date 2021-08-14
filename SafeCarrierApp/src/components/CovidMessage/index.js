import React from "react";
import { View, Text } from "react-native";

import styles from './styles';

const CovidMessage = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reliable, Fast And Flexible</Text>
      <Text style={styles.text}>
        Let's deliver your package asap
      
      </Text>
      {/* <Text style={styles.learnMore}>Learn more</Text> */}
    </View>
  );
};

export default CovidMessage;
