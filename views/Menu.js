/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, View, Pressable, Text } from 'react-native';

function Menu({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Pressable 
          style={{ backgroundColor: "blue" }} 
          onPress={()=>{
          navigation.navigate('Training')
        }}>
          <Text style={{ color: 'white' }}>Ver Entrenamientos</Text>
        </Pressable>
        <Pressable>
          <Text>Cerrar Sesion</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Menu;
