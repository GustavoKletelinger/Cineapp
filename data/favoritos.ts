// Guarda os ids dos filmes favoritados e avisa as telas quando algo muda.
// Assim, favoritar um filme em uma tela aparece nas outras (Minha lista, etc.).

type Ouvinte = () => void;

let favoritos: string[] = [];
const ouvintes = new Set<Ouvinte>();

export function estaFavorito(id: string): boolean {
  return favoritos.includes(id);
}

export function listarFavoritos(): string[] {
  return favoritos;
}

export function alternarFavorito(id: string): void {
  favoritos = favoritos.includes(id)
    ? favoritos.filter((f) => f !== id)
    : [...favoritos, id];
  ouvintes.forEach((ouvinte) => ouvinte());
}

// Registra uma função que é chamada a cada mudança.
// Retorna outra função, que cancela o registro.
export function assinar(ouvinte: Ouvinte): () => void {
  ouvintes.add(ouvinte);
  return () => {
    ouvintes.delete(ouvinte);
  };
}
