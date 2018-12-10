import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { Actions } from 'react-native-router-flux'
import LottieView from 'lottie-react-native'

import NightGuideLogo from './NightGuideLogo'


class Landing extends React.Component {
  state = {
    login: false
  }
  componentDidMount() {
    setTimeout(() => {
      Actions.instruction()
    }, 7500)
  }
  render() {
    return (
      <LottieView
        source={require('../../assets/ani/landinworking.json')}
        autoPlay
        loop
      >

      </LottieView>
    )
  }
}

const styles = StyleSheet.create({
  spinner: {
    zIndex: 1,
    position: 'relative',
    top: 150,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
  container: {
    flex: 1,
    backgroundColor: '#6c5ce7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#f3a683'
  },
  subtitle: {
    color: '#fff',
    fontWeight: '100',
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginTop: 20,
    width: 150,
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#f3a683',
    borderRadius: 5,
  },
  buttontext: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700'
  }
});

export default Landing

