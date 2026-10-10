import { StyleSheet } from "react-native";
import { cores, espaco } from "./tema";

export const estilos = StyleSheet.create({
  linha: {
    gap: espaco.pequeno,
    paddingBottom: espaco.grande,
  },
  chip: {
    backgroundColor: cores.superficieClara,
    paddingVertical: espaco.pequeno,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  chipAtivo: {
    backgroundColor: cores.destaque,
  },
  chipPressionado: {
    opacity: 0.6,
  },
  texto: {
    color: cores.branco,
    fontSize: 14,
    fontWeight: "600",
  },
});
