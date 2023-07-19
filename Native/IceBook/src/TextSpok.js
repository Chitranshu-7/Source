import React, { useEffect, useState } from 'react';
import { Button, TextInput, View, StyleSheet, Text, SafeAreaView } from 'react-native';
import Tts from 'react-native-tts';

const TextSpok = () => {

  const [text, setText] = useState('');

  // Set up TTS configuration
  useEffect(() => {
    Tts.setDefaultLanguage('en-US');
    Tts.setDefaultRate(0.5);
  }, []);

  // Speak the text
  const speakText = async () => {
    try {
      await Tts.speak(text);
    } catch (error) {
      console.log('TTS error:', error);
    }
  };
  const speakAboort = () => {
    Tts.stop();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View>

        <Text style={style.head}>Enter text:</Text>
      </View>

      <View style={style.container}>


        <TextInput
          onChangeText={setText}
          value={text}
          placeholder="Type something..."
          style={style.input}
        />
      </View>

      <View style={style.btn}>
        <Button onPress={speakText} title="Speak" />
        <View style={{ marginTop: 20 }}></View>
        <Button title='Stop' onPress={speakAboort}></Button>
      </View>
    </SafeAreaView >

  );
};


export default TextSpok;

const style = StyleSheet.create({
  head: {
    fontSize: 25, textAlign: "center", fontStyle: "italic"
  },
  subhead: {
    margin: 12,
  },
  btn: {
    position: "relative",
    top: 300,
    margin: 8

  }
  ,

  container: {
    marginVertical: 20,
    paddingHorizontal: 20,

  },
  input: {
    marginTop: 20,
    height: 90,
    borderColor: 'gray',
    opacity: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },



})