import { useRouter } from "expo-router";
import { ScrollView } from "react-native";
import Chip from "./Chip";
import { estilos } from "../styles/chip";

const atalhos = [
  { titulo: "Categorias", rota: "/categorias" },
  { titulo: "Minha lista", rota: "/minha-lista" },
  { titulo: "Busca", rota: "/busca" },
  { titulo: "Em breve", rota: "/em-breve" },
] as const;

// Faixa de atalhos no topo do catálogo, no estilo do menu da Netflix.
export default function MenuRapido() {
  const router = useRouter();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={estilos.linha}
    >
      {atalhos.map((atalho) => (
        <Chip
          key={atalho.rota}
          titulo={atalho.titulo}
          onPress={() => router.push(atalho.rota)}
        />
      ))}
    </ScrollView>
  );
}
