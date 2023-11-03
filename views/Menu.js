/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView,View,Pressable, Text} from 'react-native';

function Menu() {
  return (
    <SafeAreaView>
        <View>
            <Pressable style={{backgroundColor: "blue"}} >
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
