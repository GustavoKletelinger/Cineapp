import { StyleSheet } from "react-native";
import { cores, espaco, raio } from "./tema";

export const estilos = StyleSheet.create({
  botao: {
    backgroundColor: cores.destaque,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: raio.medio,
    alignItems: "center",
    justifyContent: "center",
  },
  secundario: {
    backgroundColor: cores.superficieClara,
  },
  botaoPressionado: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },
  texto: {
    color: cores.branco,
    fontSize: 16,
    fontWeight: "bold",
  },
});
