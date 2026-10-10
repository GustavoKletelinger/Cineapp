import { StyleSheet } from "react-native";
import { cores, espaco, raio } from "./tema";

export const estilos = StyleSheet.create({
  campo: {
    backgroundColor: cores.superficie,
    color: cores.branco,
    borderRadius: raio.medio,
    padding: espaco.medio,
    fontSize: 16,
    marginBottom: espaco.grande,
  },
});
