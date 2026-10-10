import { StyleSheet } from "react-native";
import { cores } from "./tema";

export const estilos = StyleSheet.create({
  rotulo: {
    color: cores.destaque,
    fontSize: 13,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: 10,
  },
  botao: {
    marginTop: "auto",
  },
});
