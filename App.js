/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Blink from './src/components/Blink'
import FlexDirectionBasics from './src/components/FlexDirectionBasics'
import JustifyContentBasics from './src/components/JustifyContentBasics'
import PizzaTranslator from './src/components/PizzaTranslator'
import ButtonBasics from './src/components/ButtonBasics'
import Touchable from './src/components/Touchables'
import FlatListBasics from './src/components/FlatLIstBasics'
import SectionListBasics from './src//components/SectionListBasics'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
          
      //   </Text>
      //   <Text style={styles.instructions}>
         
      //   </Text>
      //   <Text style={styles.instructions}>
      //     {instructions}
      //   </Text>
        
      // </View>
      // <FlexDirectionBasics />
      // <JustifyContentBasics />
      // <ButtonBasics />
      // <Touchable />
      // <FlatListBasics />
      <SectionListBasics />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
    fontWeight: 'normal',
  },

});
