/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView,View,Text,StyleSheet} from 'react-native';

function Training({ navigation }) {
  return (
    <SafeAreaView>
        <View>
            <Text style={style.title}>Entrenamientos Programados</Text>
        </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  title: {
    marginHorizontal: 10,
    marginVertical: 10,
    fontFamily: 'caption',
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
  },
});

export default Training;
