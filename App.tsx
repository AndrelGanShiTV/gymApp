/* eslint-disable quotes */
import React from "react";
import "react-native-gesture-handler";
//Importar las Navegaciones
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Importar Firebase
import FirebaseStage from "./context/firebase/firebaseStage";
import RequestsStage from "./context/requests/requestsStage";
//Importacion de las vistas
import Training from "./views/Training";
import Menu from "./views/Menu";
//Crear una variable para el uso de navigation
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <FirebaseStage>
        <RequestsStage>
          <NavigationContainer>
            <Stack.Navigator
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
        </RequestsStage>
      </FirebaseStage>
    </>
  );
};

export default App;
