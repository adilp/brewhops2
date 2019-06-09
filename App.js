/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component} from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, Image, Animated, Easing, ScrollView } from 'react-native';

const animationImages = [
    require('./assets/fonts/brew.png'),
    require('./assets/fonts/brewSide.png'),
    require('./assets/fonts/brewSide2.png'),
    require('./assets/fonts/brewSide.png'),
];

const im = require('./assets/fonts/top.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 40
  },

  logoutText: {
    color: 'white',
    fontSize: 30
  },

  activeMember: {
    color: 'white',
    fontSize: 50,
    fontFamily: 'Athelas'
  },
  note: {
    color: '#999999',
    fontSize: 20
  },
  marry: {
    color: '#999999',
    fontSize: 90
  },
  imageStyle: {
    height: 400,
    width: 300,
},
imageStyle2: {
  height: 60,
  width: 300
},
topstyle: {
  height: 60,
  width: 300
}
});

//let yourPic = require('./assets/fonts/brew.png');

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      spinValue: new Animated.Value(0),
      rotateValue: new Animated.Value(0),
      imageIndex: 0
      // noteQuote: '',
      // monthNumber: moment().format('M')
      
    };
  }
  

  componentDidMount() {
    setInterval(() => {
      let imageIndex = this.state.imageIndex+1;
        if (imageIndex >= animationImages.length) {
            imageIndex = 0;
        }
        this.setState({imageIndex:imageIndex});
      }, 1000); 
  }


  render() {

   
    return (
      <ScrollView style={{flex:1}}>
      <View style={styles.container}>
      <Image style={{
        height: 200,
        width: 500
      }} source={require('./assets/fonts/top.png')} />
      <Text style={styles.logoutText}> Hello AdilPatel </Text>
      <Text style={styles.logoutText}> Log out </Text>
      <Text style={styles.activeMember}> Active Member </Text>
      <View>
      <Image style={styles.imageStyle} source={animationImages[this.state.imageIndex]} />
      </View>
      <Image style={styles.imageStyle2} source={{ uri: "https://static.wixstatic.com/media/356a95_814e88077fc844ffb7b279f847794317.png/v1/fill/w_348,h_82,al_c,usm_0.66_1.00_0.01/356a95_814e88077fc844ffb7b279f847794317.png" }} />
      </View>
      </ScrollView>
  
      
    );
  }
}

export default App;
