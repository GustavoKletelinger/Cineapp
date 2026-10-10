import { useRouter } from "expo-router";
import { View } from "react-native";
import FilmeCard from "./FilmeCard";
import { Filme } from "../data/filmes";

type ListaFilmesProps = {
  filmes: Filme[];
};

// Lista de FilmeCard que abre a tela de detalhes ao tocar em um filme.
export default function ListaFilmes({ filmes }: ListaFilmesProps) {
  const router = useRouter();

  return (
    <View>
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
    </View>
  );
}
