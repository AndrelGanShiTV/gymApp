import React, { useState } from 'react';
import { SafeAreaView, View, Pressable, Text, TextInput, StyleSheet } from 'react-native';

function Login({ navigation }) {
    const [user, setUser] = useState(''); // Estado para el usuario
    const [password, setPassword] = useState(''); // Estado para la contraseña

    return (
        <SafeAreaView>
            <View>
                <Text style={style.title}>Username</Text>
                <TextInput
                    style={style.input}
                    placeholder='Enter User'
                    placeholderTextColor={'#ccc'}
                    value={user} // Vincula el valor a 'user'
                    onChangeText={setUser} // Actualiza 'user' cuando cambia el texto

                >
                </TextInput>
            </View>
            <View>
                <Text style={style.title}>Password</Text>
                <TextInput
                    placeholder="Enter Password"
                    placeholderTextColor={'#ccc'}
                    value={password} // Vincula el valor a 'password'
                    onChangeText={setPassword} // Actualiza 'password' cuando cambia el texto

                >
                </TextInput>
            </View>
            <View>

                <Pressable
                    style={style.btn}
                    onPress={() => {
                        navigation.navigate('Menu');
                    }}>
                    <Text style={style.btnText}>Sign in</Text>
                </Pressable>

            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    contains: {
        backgroundColor: '#F3F4f6',
        flex: 1,
        alignItems: 'center',
    },
    title: {
        marginHorizontal: 10,
        marginVertical: 10,
        fontFamily: 'caption',
        fontSize: 25,
        color: 'black',
        textAlign: 'center',
    },
    label: {
        color: '#5195FF',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600',
    },
    input: {
        backgroundColor: '#FFF',
        color: '#000',
        padding: 15,
        borderRadius: 10,
    },
    btn: {
        backgroundColor: '#6D28D9',
        marginHorizontal: 40,
        marginVertical: 10,
        padding: 10,
        borderRadius: 5,
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
});

export default Login;