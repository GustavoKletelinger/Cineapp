import { StyleSheet } from "react-native";
import { cores, espaco, raio } from "./tema";

export const estilos = StyleSheet.create({
  conteudo: {
    gap: espaco.medio,
  },
  poster: {
    width: 220,
    height: 330,
    borderRadius: raio.grande,
  },
  sinopse: {
    color: cores.textoClaro,
    lineHeight: 23,
  },
});
