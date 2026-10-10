import { ScrollView, Text, View } from "react-native";
import Poster from "../components/Poster";
import { emBreve } from "../data/filmes";
import { comum } from "../styles/global";
import { estilos } from "../styles/emBreve";

// Tela "Em breve": lançamentos que ainda vão chegar ao catálogo.
// Os títulos são fictícios e não têm imagem, então o Poster mostra o quadro 🎬.
export default function EmBreve() {
  return (
    <ScrollView contentContainerStyle={comum.conteudo}>
      <Text style={comum.tituloSecao}>Em breve</Text>

      {emBreve.map((item) => (
        <View key={item.id} style={estilos.item}>
          <Poster estilo={estilos.poster} />
          <View style={estilos.info}>
            <Text style={estilos.titulo}>{item.titulo}</Text>
            <Text style={estilos.genero}>{item.genero}</Text>
            <Text style={comum.texto}>{item.sinopse}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
