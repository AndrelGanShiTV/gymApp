import React from 'react';
import {SafeAreaView,View,Pressable, Text} from 'react-native';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

function Menu() {
  return (
    <SafeAreaView>
        <View>
            <Pressable style={{backgroundColor: "blue"}}>
                <Text style={{backgroundColor: "white"}}>Ver Entrenamientos</Text>
            </Pressable>
            <Pressable>
                <Text>Cerrar Sesion</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

export default Menu;
