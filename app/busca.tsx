import { useState } from "react";
import { ScrollView, Text, TextInput } from "react-native";
import ListaFilmes from "../components/ListaFilmes";
import { filmes } from "../data/filmes";
import { comum } from "../styles/global";
import { cores } from "../styles/tema";
import { estilos } from "../styles/busca";

// Remove acentos e deixa tudo minúsculo, para "acao" encontrar "Ação".
function normalizar(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

// Tela de busca: filtra os filmes pelo título (ou começo do gênero) enquanto o usuário digita.
export default function Busca() {
  // Estado com o texto digitado no campo.
  const [texto, setTexto] = useState("");

  const termo = normalizar(texto.trim());
  const resultado = filmes.filter(
    (f) =>
      normalizar(f.titulo).includes(termo) ||
      normalizar(f.genero).startsWith(termo)
  );

  return (
    <ScrollView
      contentContainerStyle={comum.conteudo}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={comum.tituloSecao}>Buscar filmes</Text>

      <TextInput
        style={estilos.campo}
        value={texto}
        onChangeText={setTexto}
        placeholder="Digite o título ou o gênero"
        placeholderTextColor={cores.textoSuave}
        autoCorrect={false}
      />

      {resultado.length === 0 ? (
        <Text style={[comum.texto, comum.centralizado]}>
          Nenhum filme encontrado para "{texto}".
        </Text>
      ) : (
        <ListaFilmes filmes={resultado} />
      )}
    </ScrollView>
  );
}
