import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import Botao from "../components/Botao";
import { comum } from "../styles/global";
import { estilos } from "../styles/sobre";

// Tela "Sobre": informações do aplicativo e retorno ao catálogo.
export default function Sobre() {
  const router = useRouter();

  return (
    <View style={comum.tela}>
      <Text style={comum.tituloGrande}>🎬 CineApp</Text>

      <View style={comum.caixa}>
        <Text style={estilos.rotulo}>Finalidade</Text>
        <Text style={comum.textoBranco}>
          Apresentar um catálogo de filmes e permitir marcar favoritos.
        </Text>

        <Text style={estilos.rotulo}>Versão</Text>
        <Text style={comum.textoBranco}>1.0.0</Text>

        <Text style={estilos.rotulo}>Disciplina</Text>
        <Text style={comum.textoBranco}>Programação para Dispositivos Móveis I</Text>
      </View>

      <View style={estilos.botao}>
        <Botao
          titulo="Voltar ao catálogo"
          onPress={() => router.replace("/catalogo")}
        />
      </View>
    </View>
  );
}
