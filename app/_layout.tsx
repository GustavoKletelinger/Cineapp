import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

// Layout raiz: define o Stack de navegação (Expo Router) e o estilo do cabeçalho.
export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#12121a" },
          headerTintColor: "#fff",
          contentStyle: { backgroundColor: "#12121a" },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="catalogo" options={{ title: "Catálogo" }} />
        <Stack.Screen name="detalhes" options={{ title: "Detalhes" }} />
        <Stack.Screen name="sobre" options={{ title: "Sobre" }} />
        <Stack.Screen name="categorias" options={{ title: "Categorias" }} />
        <Stack.Screen name="minha-lista" options={{ title: "Minha lista" }} />
        <Stack.Screen name="busca" options={{ title: "Busca" }} />
        <Stack.Screen name="em-breve" options={{ title: "Em breve" }} />
      </Stack>
    </>
  );
}
