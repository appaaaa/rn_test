import React, { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'

export class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name} ! </Text>
    )
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name="Saehanseul" />
        <Greeting name="Moonsae" />
        <Greeting name="seohee" />
      </View>
    )
  }
}

