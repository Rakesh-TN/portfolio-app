import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderPart from './components/HeaderPart'
import MainPart from './components/MainPart'

const App = () => {
  return (
    <View style={styles.container}>
      <HeaderPart />
      <MainPart />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
  flex:1,
  paddingTop:30,
  paddingStart:20,
  backgroundColor: '#F75300'
  // alignItems: 'center',
  // justifyContent: 'center'
  }
})