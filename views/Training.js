import React, { useEffect, useContext, Fragment } from "react";
import { View, StyleSheet } from "react-native";
import FirebaseContext from "../context/firebase/firebaseContext";
import { NativeBaseProvider, Text, ScrollView, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../styles/global";

function Training({ navigation }) {
  const navegation = useNavigation();

  const { training, getTraining } = useContext(FirebaseContext);
  useEffect(() => {
    getTraining();
  }, []);

  return (
    <NativeBaseProvider style={globalStyles.container}>
      <View style={[globalStyles.content, style.contenido]}>
        <Button
          style={globalStyles.btn}
          block
          onPress={() => navegation.navigate("Menu")}
        ></Button>
        {training.map((tr) => {
          const { date, about } = training;
          return (
            <Fragment>
              <View>
                <Text>{date}</Text>
                <Text>{about}</Text>
              </View>
            </Fragment>
          );
        })}
      </View>
    </NativeBaseProvider>
  );
}

const style = StyleSheet.create({
  contenido: {
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default Training;
