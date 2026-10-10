import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import Botao from "../components/Botao";
import Poster from "../components/Poster";
import { comum } from "../styles/global";
import { estilos } from "../styles/inicio";

// Tela inicial: nome, logotipo, descrição e botão que leva ao catálogo.
export default function Inicio() {
  const router = useRouter();

  return (
    <View style={[comum.tela, comum.centro]}>
      <Poster
        uri="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
        estilo={estilos.logo}
      />
      <Text style={comum.tituloGrande}>🎬 CineApp</Text>
      <Text style={[comum.texto, comum.centralizado]}>
        Seu catálogo de filmes favoritos. Explore os títulos, veja os detalhes
        e marque os que você mais gosta.
      </Text>

      <View style={comum.blocoBotoes}>
        <Botao titulo="Acessar catálogo" onPress={() => router.push("/catalogo")} />
        <Botao
          titulo="Sobre o app"
          variante="secundario"
          onPress={() => router.push("/sobre")}
        />
      </View>
    </View>
  );
}
