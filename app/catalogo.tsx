import { useEffect } from "react";
import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import FilmeCard from "../components/FilmeCard";
import Botao from "../components/Botao";
import MenuRapido from "../components/MenuRapido";
import { filmes } from "../data/filmes";
import { comum } from "../styles/global";
import { estilos } from "../styles/catalogo";

// Tela do catálogo: lista os filmes usando o componente FilmeCard.
export default function Catalogo() {
  const router = useRouter();

  // useEffect com array vazio: roda uma única vez, quando a tela é aberta.
  // Finalidade: registrar no console que o catálogo foi carregado
  // (útil para depuração e para acompanhar o ciclo de vida da tela).
  useEffect(() => {
    console.log("Catálogo carregado");
  }, []);

  return (
    <ScrollView contentContainerStyle={comum.conteudo}>
      <MenuRapido />

      <Text style={comum.tituloSecao}>Filmes em destaque</Text>

      {filmes.map((filme) => (
        <FilmeCard
          key={filme.id}
          id={filme.id}
          titulo={filme.titulo}
          genero={filme.genero}
          ano={filme.ano}
          imagem={filme.imagem}
          onPress={() =>
            router.push({ pathname: "/detalhes", params: { id: filme.id } })
          }
        />
      ))}

      <View style={estilos.rodape}>
        <Botao
          titulo="Sobre o app"
          variante="secundario"
          onPress={() => router.push("/sobre")}
        />
      </View>
    </ScrollView>
  );
}
