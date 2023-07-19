import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Speech from 'expo-speech';
import { Button } from 'react-native';
import { TextInput } from 'react-native';


export default function TextSpeech() {

    const [thinga, setthinga] = useState("");
    const speak = () => {
        Speech.speak(thinga);
    };
    const aboot = () => {
        Speech.stop();

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Text style={style.head}>Speech Text</Text>
            </View>
            {/* <Text style={style.subhead}> {thinga}</Text> */}
            <View style={style.container}>
                <TextInput
                    value={thinga}
                    style={style.input}
                    onChangeText={text => setthinga(text)}
                    placeholder="Writing here."
                />
            </View>
           

                <View style={style.btn}>
                    <Button onPress={speak} title='Speack Now'></Button>
                    <View style={{ marginTop: 20 }}></View>
                    <Button title='Stop' onPress={aboot}></Button>
                </View>
          


        </SafeAreaView>
    )
}

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