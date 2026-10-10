import { StyleSheet } from "react-native";
import { cores, espaco, raio } from "./tema";

// Classes de estilo reutilizadas por várias telas e componentes.
// Para combinar, use array: style={[comum.texto, comum.centralizado]}
export const comum = StyleSheet.create({
  // ----- Layout -----
  tela: {
    flex: 1,
    padding: espaco.extra,
    gap: espaco.grande,
  },
  centro: {
    alignItems: "center",
    justifyContent: "center",
  },
  conteudo: {
    padding: espaco.grande,
  },
  esticado: {
    alignSelf: "stretch",
  },
  blocoBotoes: {
    alignSelf: "stretch",
    gap: espaco.medio,
    marginTop: espaco.medio,
  },

  // ----- Textos -----
  tituloGrande: {
    color: cores.branco,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  titulo: {
    color: cores.branco,
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  tituloSecao: {
    color: cores.branco,
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 14,
  },
  texto: {
    color: cores.textoSuave,
    fontSize: 16,
  },
  textoBranco: {
    color: cores.branco,
    fontSize: 16,
  },
  centralizado: {
    textAlign: "center",
    lineHeight: 22,
  },

  espacoTopo: {
    marginTop: espaco.extra,
  },

  // ----- Elementos visuais -----
  caixa: {
    backgroundColor: cores.superficie,
    borderRadius: raio.grande,
    padding: espaco.grande,
    gap: 4,
  },
  imagem: {
    backgroundColor: cores.superficieClara,
  },
});
