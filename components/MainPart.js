import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MainPart() {
  return (
    <View>
        <Text style={styles.mainHeadfont}>Hi I'm Rakesh TN</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    mainHeadfont:{
        color: '#FFD0A3',
        fontSize: 30,
        paddingTop: 10,
    }
})