import React, { useEffect, useContext, Fragment } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import FirebaseContext from "../context/firebase/firebaseContext";
import { NativeBaseProvider, Text, ScrollView, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../styles/global";

function Training({ navigation }) {
  const navegation = useNavigation();

  const { training, getTraining } = useContext(FirebaseContext);
  useEffect(() => {
    getTraining();
    console.log(training.about);
  }, []);

  return (
    <NativeBaseProvider style={globalStyles.container}>
      <ScrollView>
        <View>
          <Pressable
            style={globalStyles.btn}
            block
            onPress={() => navegation.navigate("Menu")}
          >
            <Text style={style.text}>Volver Al Menu</Text>
          </Pressable>

          {training.map((training, i) => {
            const { date, about, id } = training;
            console.log(date);
            console.log(about);
            return (
              <Fragment key={id}>
                <View style={globalStyles.content}>
                  <Text style={style.text}>Fecha: {date}</Text>
                  <Text style={style.text}>Descripción: {about}</Text>
                </View>
              </Fragment>
            );
          })}
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const style = StyleSheet.create({
  text: {
    color: "#FFF",
    textAlign: "center",
  },
  content: {
    backgroundColor: "#000",
  },
});

export default Training;
