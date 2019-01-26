/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react'
import Header from './components/Header'
import ContentFriend from './components/ContentFriend'
import { Platform, StyleSheet, Text, View, Button } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ContentFriend />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Barlow'
  }
});
