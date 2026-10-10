import { useState } from "react";
import { Image, ImageStyle, StyleProp, Text, View, ViewStyle } from "react-native";
import { comum } from "../styles/global";
import { estilos } from "../styles/poster";

type PosterProps = {
  uri?: string;
  estilo?: StyleProp<ImageStyle>;
};

// Mostra a imagem do filme. Se não houver imagem ou ela falhar ao carregar,
// mostra um quadro com 🎬 no mesmo tamanho, em vez de deixar um buraco na tela.
export default function Poster({ uri, estilo }: PosterProps) {
  const [falhou, setFalhou] = useState(false);

  if (!uri || falhou) {
    return (
      <View style={[estilos.reserva, estilo as StyleProp<ViewStyle>]}>
        <Text style={estilos.emoji}>🎬</Text>
      </View>
    );
  }

  return (
    <Image
      source={{ uri }}
      style={[comum.imagem, estilo]}
      onError={() => setFalhou(true)}
    />
  );
}
