import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import Botao from "../components/Botao";
import Poster from "../components/Poster";
import { filmes } from "../data/filmes";
import { comum } from "../styles/global";
import { estilos } from "../styles/detalhes";

// Tela de detalhes: recebe o id do filme pela navegação (Expo Router).
export default function Detalhes() {
  const router = useRouter();
  const {  } = iduseLocalSearchParams<{ id: string }>();
  const filme = filmes.find((f) => f.id === id);

  if (!filme) {
    return (
      <View style={[comum.tela, comum.centro]}>
        <Text style={comum.titulo}>Filme não encontrado</Text>
        <Botao titulo="Voltar" onPress={() => router.back()} />
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={[comum.conteudo, comum.centro, estilos.conteudo]}
    >
      <Poster uri={filme.imagem} estilo={estilos.poster} />
      <Text style={comum.titulo}>{filme.titulo}</Text>
      <Text style={comum.texto}>
        {filme.genero} • {filme.ano}
      </Text>
      <Text style={[comum.texto, comum.centralizado, estilos.sinopse]}>
        {filme.sinopse}
      </Text>

      <View style={comum.blocoBotoes}>
        <Botao titulo="Voltar ao catálogo" onPress={() => router.back()} />
      </View>
    </ScrollView>
  );
}
