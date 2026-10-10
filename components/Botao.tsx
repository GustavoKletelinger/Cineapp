import { Pressable, Text } from "react-native";
import { estilos } from "../styles/botao";

type BotaoProps = {
  titulo: string;
  onPress: () => void;
  variante?: "primario" | "secundario";
};

// Componente reutilizável de botão. Usa Pressable para mudar a aparência
// enquanto o usuário mantém o dedo pressionado (estilo "pressed").
export default function Botao({
  titulo,
  onPress,
  variante = "primario",
}: BotaoProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        estilos.botao,
        variante === "secundario" && estilos.secundario,
        pressed && estilos.botaoPressionado,
      ]}
    >
      <Text style={estilos.texto}>{titulo}</Text>
    </Pressable>
  );
}
