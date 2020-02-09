# React Native - Desafio 1

[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/osvaldokalvaitir/react-native-desafio1/blob/master/LICENSE)
![](https://img.shields.io/github/package-json/v/osvaldokalvaitir/react-native-desafio1.svg)
![](https://img.shields.io/github/last-commit/osvaldokalvaitir/react-native-desafio1.svg?color=red)
![](https://img.shields.io/github/languages/top/osvaldokalvaitir/react-native-desafio1.svg?color=yellow)
![](https://img.shields.io/github/languages/count/osvaldokalvaitir/react-native-desafio1.svg?color=lightgrey)
![](https://img.shields.io/github/languages/code-size/osvaldokalvaitir/react-native-desafio1.svg)
![](https://img.shields.io/github/repo-size/osvaldokalvaitir/react-native-desafio1.svg?color=blueviolet)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)

Aplicação usando React Native, ESLint, Prettier, EditorConfig, Babel Root Import, Babel Module Resolver, React DevTools, prop-types, DebugJS e Reactotron.

## Desafio 1

Crie uma aplicação do zero e configure o ESLint, EditorConfig, Reactotron, React DevTools e Babel Root Import. Assim que configurados, você deve reproduzir o layout abaixo utilizando FlexBox layout:

![Feed](/.github/assets/feed.png)

Nesse projeto você desenvolverá um feed de posts estilo Facebook. Crie um layout tentando chegar o mais próximo possível da imagem acima.

### Regras

- O layout deve ser criado utilizando apenas os componentes `<View />`, `<Text />` e `<ScrollView />` do React Native;
- A caixa branca com o título “Aprendendo React Native” deve estar separada em outro componente chamado Post, o mesmo deve estar em outro arquivo chamado Post.js.
- Os posts devem estar armazenados no estado do componente principal da sua aplicação contendo título, autor e descrição de cada item. Dessa forma, os mesmos devem ser renderizados em tela utilizando a função map para percorrê-los.

### Dicas

- Todas propriedades de estilo disponíveis para os componentes estão documentadas no link: https://github.com/RocketSeat/react-native-styling-cheat-sheet;
- Para alinhar todo conteúdo de um componente ao centro basta unir as propriedades `justifyContent: “center”` e `alignItems: “center”`;
- Para fazer que seja possível realizar scroll e ter uma barra de rolagem quando haverem muitos posts em tela é necessária a utilização do componente `<ScrollView \>` por volta da lista de posts, como por exemplo:

```
<ScrollView>
  <Post />
  <Post />
  <Post />
</ScrollView>
```

## Índice

- [Capturas de Tela](#capturas-de-tela)

  - [Principal](#principal)

- [Desenvolvimento](#desenvolvimento)

  - [Configuração do Ambiente](#configuração-do-ambiente)

  - [Instalação do Projeto](#instalação-do-projeto)

  - [Execução do Projeto](#execução-do-projeto)

- [Utilizados no Projeto](#utilizados-no-projeto)

  - [Bibliotecas](#bibliotecas)

  - [Ferramentas](#ferramentas)

## Capturas de Tela

### Principal

![Main](/.github/assets/main.png)
Esta é a única tela do site, onde aparecem os posts estáticos dos usuários.

## Desenvolvimento

### Configuração do Ambiente

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/README.md) e siga `Configuração de Ambiente`.

### Instalação do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/nodejs.md) e siga `Instalação de Projeto`.

### Execução do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-cli.md) e siga `Execução de Projeto para Desenvolvimento`.

## Utilizados no Projeto

### Bibliotecas

- [Babel Root Import](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/babel-plugin-root-import.md)

- [babel-eslint](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/babel-eslint.md)

- [eslint](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint.md)

- [ESLint plugin for React Native](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint-plugin-react-native.md)

- [eslint-import-resolver-babel-plugin-root-import](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint-import-resolver-babel-plugin-root-import.md)

- [prop-types](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/prop-types.md)

- [react-devtools](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-devtools.md)

- [react-native-cli](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-cli.md)

- [reactotron-react-native](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/reactotron-react-native.md)

### Ferramentas

- [Reactotron](https://github.com/osvaldokalvaitir/projects-settings/blob/master/inspector/reactotron.md)
