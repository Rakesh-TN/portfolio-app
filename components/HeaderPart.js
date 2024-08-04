import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const HeaderPart = () => {
  return (
    <View>
      <Text style={styles.headerFont}>Portfolio</Text>
    </View>
  )
}

export default HeaderPart

const styles = StyleSheet.create({
  headerFont:{
    fontSize: 60,
    color: '#FFD0A3'
  }
})