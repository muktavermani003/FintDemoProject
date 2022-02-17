/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  View,
  Text, StyleSheet, TouchableOpacity, Image
} from 'react-native';
class ButtonComponent extends Component {
  render() {
    const { title, buttonStyle, image, hasRocketIcon } = this.props
    return (
      <View style={styles.container}>
        {hasRocketIcon ? (
          <TouchableOpacity style={[styles.button, buttonStyle, image]}>
            <Image source={require('./images/rocket.jpg')}
              style={styles.rocketIcon} />
            <Text style={styles.title}>{title}</Text>
          </TouchableOpacity>
        ) : <TouchableOpacity style={[styles.button, buttonStyle, image]}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>}
      </View>
    )
  }
}

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'green',

  },
  button: {
    backgroundColor: 'white',
    height: 60,
    width: 170,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowOpacity: 1,
    elevation: 1,
    flexDirection: 'row'
  },
  rocketIcon: {
    height: 25,
    width: 25,
    marginRight: 10
  },
  title: {
    fontSize: 15,
    color: 'black',
  },

})
