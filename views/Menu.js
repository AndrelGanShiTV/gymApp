import React from "react";
import {SafeAreaView, View, Pressable, Text, StyleSheet} from "react-native";

function Menu({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Pressable
          style={style.btn}
          onPress={() => {
            navigation.navigate("Training");
          }}
        >
          <Text style={style.btnText}>Ver Entrenamientos</Text>
        </Pressable>

        <Pressable style={style.btn}>
          <Text style={style.btnText}>Cerrar Sesion</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  btn: {
    backgroundColor: "#6D28D9",
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});

export default Menu;
