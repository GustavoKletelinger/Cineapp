import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Poster from "./Poster";
import { alternarFavorito, assinar, estaFavorito } from "../data/favoritos";
import { estilos } from "../styles/filmeCard";

type FilmeCardProps = {
  id?: string;
  titulo: string;
  genero: string;
  ano: number;
  imagem?: string;
  onPress?: () => void;
};

// Componente reutilizável que apresenta um filme.
// Recebe as informações por Props e controla o favorito com useState.
export default function FilmeCard({
  id,
  titulo,
  genero,
  ano,
  imagem,
  onPress,
}: FilmeCardProps) {
  // Estado que controla se este filme está marcado como favorito.
  const [favorito, setFavorito] = useState(id ? estaFavorito(id) : false);

  // Mantém o botão sincronizado quando o mesmo filme é favoritado ou
  // desfavoritado em outra tela (por exemplo, em "Minha lista").
  useEffect(() => {
    if (!id) return;
    return assinar(() => setFavorito(estaFavorito(id)));
  }, [id]);

  function aoFavoritar() {
    setFavorito(!favorito);
    if (id) alternarFavorito(id);
  }

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [estilos.card, pressed && estilos.cardPressionado]}
    >
      <Poster uri={imagem} estilo={estilos.imagem} />

      <View style={estilos.info}>
        <Text style={estilos.titulo} numberOfLines={2}>
          {titulo}
        </Text>
        <Text style={estilos.detalhe}>{genero}</Text>
        <Text style={estilos.detalhe}>{ano}</Text>

        <Pressable
          onPress={aoFavoritar}
          style={({ pressed }) => [
            estilos.botaoFavorito,
            favorito && estilos.botaoFavoritoAtivo,
            pressed && estilos.botaoFavoritoPressionado,
          ]}
        >
          <Text style={estilos.textoFavorito}>
            {favorito ? "★ Favorito" : "☆ Favoritar"}
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
}
