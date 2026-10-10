export type Filme = {
  id: string;
  titulo: string;
  imagem: string;
  genero: string;
  ano: number;
  sinopse: string;
};

export type Lancamento = {
  id: string;
  titulo: string;
  genero: string;
  sinopse: string;
};

// Filmes cadastrados diretamente no código (requisito da atividade).
// As imagens vêm de URLs públicas. Se alguma não carregar, o componente
// Poster mostra um quadro com 🎬 no lugar, então o app nunca quebra.
export const filmes: Filme[] = [
  {
    id: "1",
    titulo: "Interestelar",
    imagem: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    genero: "Ficção Científica",
    ano: 2014,
    sinopse:
      "Um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade.",
  },
  {
    id: "2",
    titulo: "O Poderoso Chefão",
    imagem: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    genero: "Crime",
    ano: 1972,
    sinopse:
      "A saga da família Corleone, uma das mais poderosas famílias da máfia italiana nos Estados Unidos.",
  },
  {
    id: "3",
    titulo: "A Origem",
    imagem: "https://image.tmdb.org/t/p/w500/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    genero: "Ficção Científica",
    ano: 2010,
    sinopse:
      "Um ladrão que invade os sonhos das pessoas recebe a missão de plantar uma ideia na mente de um alvo.",
  },
  {
    id: "4",
    titulo: "Cidade de Deus",
    imagem: "https://image.tmdb.org/t/p/w500/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg",
    genero: "Drama",
    ano: 2002,
    sinopse:
      "A história de dois garotos que crescem em uma favela do Rio de Janeiro e seguem caminhos opostos.",
  },
  {
    id: "5",
    titulo: "Parasita",
    imagem: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    genero: "Suspense",
    ano: 2019,
    sinopse:
      "Uma família pobre se infiltra aos poucos na vida de uma família rica, com consequências inesperadas.",
  },
  {
    id: "6",
    titulo: "Matrix",
    imagem: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    genero: "Ação",
    ano: 1999,
    sinopse:
      "Um programador descobre que a realidade em que vive é uma simulação criada por máquinas.",
  },
  {
    id: "7",
    titulo: "Batman: O Cavaleiro das Trevas",
    imagem: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    genero: "Ação",
    ano: 2008,
    sinopse:
      "Batman enfrenta o Coringa, um criminoso que mergulha Gotham City no caos.",
  },
  {
    id: "8",
    titulo: "Pulp Fiction",
    imagem: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    genero: "Crime",
    ano: 1994,
    sinopse:
      "Histórias de criminosos de Los Angeles se cruzam em episódios de violência e humor negro.",
  },
  {
    id: "9",
    titulo: "Clube da Luta",
    imagem: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    genero: "Drama",
    ano: 1999,
    sinopse:
      "Um homem insone cria um clube secreto de lutas com um vendedor carismático, e a situação foge do controle.",
  },
  {
    id: "10",
    titulo: "Forrest Gump",
    imagem: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    genero: "Drama",
    ano: 1994,
    sinopse:
      "Um homem de bom coração atravessa décadas da história dos Estados Unidos e vive acontecimentos extraordinários.",
  },
  {
    id: "11",
    titulo: "Vingadores: Ultimato",
    imagem: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    genero: "Ação",
    ano: 2019,
    sinopse:
      "Os heróis restantes se unem para desfazer a destruição causada por Thanos.",
  },
  {
    id: "12",
    titulo: "A Viagem de Chihiro",
    imagem: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    genero: "Animação",
    ano: 2001,
    sinopse:
      "Uma menina entra em um mundo de espíritos e precisa trabalhar para salvar seus pais.",
  },
];

// Títulos fictícios, usados só na tela "Em breve".
export const emBreve: Lancamento[] = [
  {
    id: "e1",
    titulo: "Projeto Aurora",
    genero: "Ficção Científica",
    sinopse: "Uma equipe de engenheiros tenta reativar uma estação espacial abandonada.",
  },
  {
    id: "e2",
    titulo: "O Último Compilador",
    genero: "Suspense",
    sinopse: "Uma programadora descobre que um código escrito por ela está prevendo o futuro.",
  },
  {
    id: "e3",
    titulo: "Noite de Neon",
    genero: "Ação",
    sinopse: "Uma corrida contra o tempo pelas ruas de uma cidade que nunca dorme.",
  },
  {
    id: "e4",
    titulo: "A Rota Secreta",
    genero: "Drama",
    sinopse: "Dois irmãos refazem a viagem que mudou a vida da família.",
  },
];
