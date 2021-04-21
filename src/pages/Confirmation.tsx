import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Button} from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation(){
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.emoji}>
            😀
          </Text>

          <Text style={styles.title}>
            Prontinho
          </Text>
          
          <Text style={styles.subtitle}>
            Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
          </Text>
          
          <View style={styles.footer}>
            <Button 
              title="Começar"
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