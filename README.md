# CineApp — Catálogo de Filmes

**Nome:** Gustavo Kletelinger
**RA:**  2991392513022
**Disciplina:** Programação para Dispositivos Móveis I

## Descrição

O CineApp é um aplicativo mobile feito com React Native + Expo que apresenta um catálogo de filmes. O usuário navega entre as telas, visualiza os filmes, marca seus favoritos e consulta os detalhes de cada título.

## Telas

| Tela | O que faz |
|---|---|
| **Início** | Nome, logotipo, descrição e botão (Pressable) para acessar o catálogo |
| **Catálogo** | 12 filmes cadastrados no código (título, imagem, gênero, ano e favorito), com atalhos no topo |
| **Detalhes** | Informações e sinopse do filme escolhido, com botão de voltar |
| **Sobre** | Nome, finalidade, versão e disciplina, com volta ao catálogo |
| **Categorias** | Filtra os filmes por gênero (Ação, Drama, Crime...) |
| **Minha lista** | Mostra os filmes marcados como favoritos |
| **Busca** | Procura filmes pelo título enquanto o usuário digita |
| **Em breve** | Lista de lançamentos (títulos fictícios) |

Fluxo: Início → Catálogo → Detalhes / Sobre / Categorias / Minha lista / Busca / Em breve → Voltar.

## Conceitos aplicados (até a Aula 09)

View, Text, Image, TextInput, StyleSheet, Flexbox, Pressable, useState, useEffect, Expo Router, componentes reutilizáveis e Props.

## Componentes reutilizáveis

- `FilmeCard`: apresenta um filme e controla o favorito com `useState`.
- `Botao`: botão com efeito visual ao pressionar.
- `Chip`: botão pequeno usado nos atalhos e nos filtros de gênero.
- `Poster`: mostra a imagem do filme e, se ela não carregar, um quadro 🎬.
- `MenuRapido` e `ListaFilmes`: atalhos do catálogo e lista de filmes.

## Estrutura

```
CineApp/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── catalogo.tsx
│   ├── detalhes.tsx
│   ├── sobre.tsx
│   ├── categorias.tsx
│   ├── minha-lista.tsx
│   ├── busca.tsx
│   └── em-breve.tsx
├── components/
│   ├── FilmeCard.tsx
│   ├── Botao.tsx
│   ├── Chip.tsx
│   ├── Poster.tsx
│   ├── MenuRapido.tsx
│   └── ListaFilmes.tsx
├── data/
│   ├── filmes.ts        (filmes e lançamentos)
│   └── favoritos.ts     (guarda os favoritos entre as telas)
├── styles/
│   ├── tema.ts          (cores, espaçamentos e raios)
│   ├── global.ts        (classes de estilo reutilizadas)
│   └── um arquivo por componente ou tela
├── assets/images/
└── package.json
```

## Como executar

```bash
npm install
npx expo start
```

Depois, escaneie o QR Code com o app **Expo Go** no celular ou pressione `a` (Android) / `w` (navegador).

## Capturas de tela

_(adicione aqui as capturas das telas: Início, Catálogo, Detalhes, Sobre, Categorias, Minha lista, Busca e Em breve)_
