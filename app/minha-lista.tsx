import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { ScrollView, Text } from "react-native";
import Botao from "../components/Botao";
import ListaFilmes from "../components/ListaFilmes";
import { filmes } from "../data/filmes";
import { assinar, listarFavoritos } from "../data/favoritos";
import { comum } from "../styles/global";

// Tela "Minha lista": mostra os filmes que o usuário favoritou.
export default function MinhaLista() {
  const router = useRouter();

  // Ids dos favoritos. Atualiza quando um favorito é adicionado ou removido.
  const [ids, setIds] = useState(listarFavoritos());

  useEffect(() => {
    return assinar(() => setIds(listarFavoritos()));
  }, []);

  const lista = filmes.filter((f) => ids.includes(f.id));

  return (
    <ScrollView contentContainerStyle={comum.conteudo}>
      <Text style={comum.tituloSecao}>Minha lista</Text>

      {lista.length === 0 ? (
        <>
          <Text style={[comum.texto, comum.centralizado]}>
            Você ainda não favoritou nenhum filme.
          </Text>
          <Text style={[comum.texto, comum.centralizado, comum.espacoTopo]}>
            Toque em ☆ Favoritar em qualquer filme para ele aparecer aqui.
          </Text>
          <Botao
            titulo="Ver catálogo"
            onPress={() => router.replace("/catalogo")}
          />
        </>
      ) : (
        <ListaFilmes filmes={lista} />
      )}
    </ScrollView>
  );
}
