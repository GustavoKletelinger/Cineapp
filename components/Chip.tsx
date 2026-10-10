import { Pressable, Text } from "react-native";
import { estilos } from "../styles/chip";

type ChipProps = {
  titulo: string;
  onPress: () => void;
  ativo?: boolean;
};

// Botão pequeno e arredondado, usado nos atalhos e nos filtros de gênero.
export default function Chip({ titulo, onPress, ativo = false }: ChipProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        estilos.chip,
        ativo && estilos.chipAtivo,
        pressed && estilos.chipPressionado,
      ]}
    >
      <Text style={estilos.texto}>{titulo}</Text>
    </Pressable>
  );
}
