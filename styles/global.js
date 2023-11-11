//Crear estilos de manera global para compartir en todos los componentes
import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: "2.5%",
    flex: 1,
  },
  btn: {
    backgroundColor: "#6D28D9",
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#000",
  },
});

export default globalStyles;
