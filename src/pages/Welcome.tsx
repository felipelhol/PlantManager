import React from 'react';
import { 
  SafeAreaView,
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet,
  Dimensions } from 'react-native';
  
import {Feather} from '@expo/vector-icons';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';
//import {Button} from '../components/Button';


export function Welcome(){
  const navigation = useNavigation();
  
  function handleStart(){
    navigation.navigate('UserIdentification');
  }
  

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Text>

      
        <Image 
          source={wateringImg} 
          style={styles.image}
          resizeMode="contain" //se ajusta a tela
        />
      
      

      <Text style={styles.subtitle}>
      Não esqueça mais de regar suas {'\n'}
      plantas. Nós cuidamos de lembrar você 
      sempre que precisar.
      </Text>

      <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.8}
        onPress={handleStart}
   //{ ...rest} não precisa por não vir de um componente
       >
     
        <Feather 
          name="chevron-right" 
          style={styles.buttonIcon}
        />
      
      </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     //usar around pra nao colar nas bordas <> space-between
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },
  
  image:{
    //width: 292, o device se encarrega disso- usar as dimensions pra nao ficar fixo
    height: Dimensions.get('window').width * 0.7
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
    //paddingHorizontal:10
  },
  buttonIcon:{
    color: colors.white,
    fontSize: 32
  }
})