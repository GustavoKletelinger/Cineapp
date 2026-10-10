import { StyleSheet } from "react-native";
import { cores, espaco, raio } from "./tema";

export const estilos = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: cores.superficie,
    borderRadius: raio.grande,
    marginBottom: 14,
    overflow: "hidden",
  },
  cardPressionado: {
    opacity: 0.8,
  },
  imagem: {
    width: 100,
    height: 150,
  },
  info: {
    flex: 1,
    padding: espaco.medio,
    justifyContent: "space-between",
  },
  titulo: {
    color: cores.branco,
    fontSize: 17,
    fontWeight: "bold",
  },
  detalhe: {
    color: cores.textoSuave,
    fontSize: 14,
  },
  botaoFavorito: {
    alignSelf: "flex-start",
    backgroundColor: cores.superficieClara,
    paddingVertical: 6,
    paddingHorizontal: espaco.medio,
    borderRadius: raio.pequeno,
  },
  botaoFavoritoAtivo: {
    backgroundColor: cores.dourado,
  },
  botaoFavoritoPressionado: {
    opacity: 0.6,
  },
  textoFavorito: {
    color: cores.branco,
    fontSize: 14,
    fontWeight: "600",
  },
});
