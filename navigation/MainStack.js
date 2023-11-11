/* eslint-disable prettier/prettier */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";
import Login from "../views/Login";
import Training from "../views/Training";
import Menu from "../views/Menu";

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "FFDA00",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
          }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            title: "Menu",
          }}
        />
        <Stack.Screen
          name="Training"
          component={Training}
          options={{
            title: "Training",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
