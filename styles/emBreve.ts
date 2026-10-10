import { StyleSheet } from "react-native";
import { cores, espaco, raio } from "./tema";

export const estilos = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: espaco.medio,
    backgroundColor: cores.superficie,
    borderRadius: raio.grande,
    padding: espaco.medio,
    marginBottom: espaco.medio,
  },
  poster: {
    width: 70,
    height: 100,
    borderRadius: raio.pequeno,
  },
  info: {
    flex: 1,
    gap: 4,
  },
  titulo: {
    color: cores.branco,
    fontSize: 17,
    fontWeight: "bold",
  },
  genero: {
    color: cores.dourado,
    fontSize: 13,
    fontWeight: "600",
  },
});
