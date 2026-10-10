import { useState } from "react";
import { ScrollView, Text } from "react-native";
import Chip from "../components/Chip";
import ListaFilmes from "../components/ListaFilmes";
import { filmes } from "../data/filmes";
import { comum } from "../styles/global";
import { estilos as estilosChip } from "../styles/chip";

// Tela de categorias: o usuário escolhe um gênero e vê só os filmes dele.
export default function Categorias() {
  const generos = ["Todos", ...Array.from(new Set(filmes.map((f) => f.genero)))];

  // Estado que guarda o gênero selecionado no momento.
  const [selecionado, setSelecionado] = useState("Todos");

  const lista =
    selecionado === "Todos"
      ? filmes
      : filmes.filter((f) => f.genero === selecionado);

  return (
    <ScrollView contentContainerStyle={comum.conteudo}>
      <Text style={comum.tituloSecao}>Categorias</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={estilosChip.linha}
      >
        {generos.map((genero) => (
          <Chip
            key={genero}
            titulo={genero}
            ativo={genero === selecionado}
            onPress={() => setSelecionado(genero)}
          />
        ))}
      </ScrollView>

      <ListaFilmes filmes={lista} />
    </ScrollView>
  );
}
