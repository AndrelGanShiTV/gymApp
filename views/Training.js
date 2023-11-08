/* eslint-disable prettier/prettier */
import React, { useEffect, useContext, Fragment } from 'react';
import { StyleSheet } from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
import { NativeBaseProvider, Text, View, ScrollView } from 'native-base'

function Training({ navigation }) {

  const { training, getTraining } = useContext(FirebaseContext)
  useEffect(() => {
    getTraining();
  }, [])
  return (
    <NativeBaseProvider>
      <ScrollView>
        <View>
          {training.map((tr) => {
            const { date, about } = training
            return (
              <Fragment>
                <View>
                  <Text>{date}</Text>
                  <Text>{about}</Text>
                </View>
              </Fragment>
            )
          })}
        </View>
      </ScrollView>
    </NativeBaseProvider>
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
