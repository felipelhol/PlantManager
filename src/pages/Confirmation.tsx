
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';

import {Button} from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Params{
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug',
  nextScreen: string;
}
const emojis = {
  hug: '🤗',
  smile: '😁'
}

export function Confirmation(){
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen
  } = routes.params as Params;

  function handleMoveOn(){
      navigation.navigate(nextScreen);
  }
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.emoji}>
            {emojis[icon]}
          </Text>

          <Text style={styles.title}>
            {title}
          </Text>
          
          <Text style={styles.subtitle}>
            {subtitle}
          </Text>
          
          <View style={styles.footer}>
            <Button 
              title={buttonTitle}
              onPress={handleMoveOn}
            />
            
          </View>
          </View>

      </View>

      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    padding: 30

  },
  form: {
    //flex: 1,
    justifyContent: 'center',
    //paddingHorizontal: 60,
    alignItems: 'center',
    width: '100%'
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15
  },
  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    textAlign: 'center',
    paddingVertical: 10,
    color: colors.heading,
  },
  emoji: {
    fontSize: 78,
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20,
    //height: 56,
    

  }

})