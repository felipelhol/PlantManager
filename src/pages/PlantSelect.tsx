import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Header} from '../components/Header';

import {Button} from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function PlantSelect(){
  return(
    <View style={styles.container}>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    //justifyContent:'center',
    //alignItems: 'center',
    backgroundColor: colors.background
  }
});