import React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header(){
  return(
    <View style={styles.container}>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.red
  }
})