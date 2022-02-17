import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import HeaderComponent from './HeaderComponent';
import ButtonComponent from './ButtonComponent';
class App extends Component {
  render() {
    return (
      <View>
        <HeaderComponent title='Shade Control' subTitle='Living Room' />
        <View style={styles.container}>
          <Text style={styles.text}>{'SCENES'}</Text>
          <View style={styles.buttonAlign}>
            <ButtonComponent title='All Off' hasRocketIcon />
            <ButtonComponent title='Bright' hasRocketIcon />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <ButtonComponent title='All Off' hasRocketIcon />
            <ButtonComponent title='Bright' hasRocketIcon />
          </View>
          <Text style={styles.text}>GROUP CONTROLS</Text>
          <View style={styles.buttonAlign}>
            <ButtonComponent title='More Open' />
            <ButtonComponent title='More Close' />
          </View>
          <Text style={styles.text}>CONTROLS</Text>
          <View style={styles.secondContainer}>
            <TouchableOpacity>
            <Image source={require('./images/forwardArrow.png')}
              style={styles.rightArrow} />
              </TouchableOpacity>
            <Text style={styles.text1}>Window Roller Blind</Text>
          </View>
          <View style={styles.buttonAlign}>
            <ButtonComponent title=' Open' buttonStyle={{ width: 110, height: 50 }} />
            <ButtonComponent title=' Pause' buttonStyle={{ width: 110, height: 50 }} />
            <ButtonComponent title='Close' buttonStyle={{ width: 110, height: 50 }} />
          </View>
          <View style={styles.buttonAlign}>
            <ButtonComponent title='BlackOut' />
            <ButtonComponent title='Flip+' />
          </View>
        </View>
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "white"
  },
  text: {
    fontWeight: 'bold',
    marginVertical:10,
    marginHorizontal:10
  },
  buttonAlign: {
    flexDirection: 'row'
  },
  rightArrow: {
    width: 35,
    height: 35
  },
  text1:{
    fontWeight:'bold',
    color:'black',
    fontSize:20
  },
  secondContainer:{
    flexDirection:"row",
    backgroundColor: "white",
    paddingVertical:10
  }
})
