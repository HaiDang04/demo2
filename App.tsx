import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Asm/LoginScreen'
import SignupScreen from './Asm/SingupScreen'
import Main from './Asm/Main';

const App = function () {
 
  return (
    <Main navigation={undefined}/>
  )
}

export default App

const styles = StyleSheet.create({})
