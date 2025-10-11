import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { SportDetailsContent } from "../../../components/Container/SportDetailContent";
import { HeaderBack } from "../../../components/Header/HeaderBack";

export default function Futebol() {
  const [sport, setSport] = useState("Futebol");

  const handleShare = () => {
    router.push("../app/(tabs)/homeScreen");
  };

  const mockData = [
    {
      id: 1,
      title: "Como planejar a atividade?",
      content: `
Local: Use a quadra, um pátio cimentado ou um campo de terra/grama. O mais importante é que o local esteja limpo, sem buracos ou pedras soltas que possam causar tropeços.

O Gol: Se não houver traves oficiais, use objetos como chinelos, tijolos, mochilas ou cones para marcar os limites do gol. Mantenha os gols em tamanho razoável para a idade das crianças.

Divisão das Equipes: Faça a divisão de forma justa, misturando níveis de habilidade entre os times. Isso garante mais equilíbrio e diversão.
    `,
    },
    {
      id: 2,
      title: "Regras a serem seguidas",
      content: `
Objetivo: Marcar gols chutando a bola para dentro da meta adversária.

Mãos Proibidas: Exceto pelo goleiro, ninguém pode tocar na bola com as mãos ou braços (o que chamamos de "mão").

Lateral e Escanteio: Quando a bola sai pelas laterais ou pelo fundo, ela é reposta em jogo. Defina se será cobrada com os pés ou arremessada com as mãos (Regra mais fácil: todos repõem com os pés).

Faltas: Chutes fortes, empurrões ou rasteiras são proibidos. O jogo deve ser de toque e drible, incentivando o respeito.

Substituições Livres: Permita que os alunos que estão cansados troquem de lugar com os que estão esperando, garantindo que todos participem e descansem.
    `,
    },
    {
      id: 3,
      title: "Quantidade de participantes",
      content: `
Padrão (Melhor Dinâmica): O ideal é jogar com 5 a 7 jogadores por time, incluindo o goleiro.

Adaptação (Espaços Pequenos): Se o espaço for muito limitado, faça times menores, com 3 ou 4 jogadores por lado.

Regra de Ouro: O número deve ser sempre o mesmo nas duas equipes para manter a igualdade e a diversão.
    `,
    },
    {
      id: 4,
      title: "Dicas para que as crianças não se machuquem",
      content: `
Alongamento Leve: Peça para as crianças fazerem um breve alongamento ou uma caminhada rápida antes de começar a jogar. Isso "liga" o corpo.

Calçados: Oriente a jogar sempre de tênis. Se usarem chinelos, incentive-os a deixar a atividade mais lenta ou a participar apenas em brincadeiras de toque, sem corrida intensa.

Hidratação: Faça pausas para beber água. Especialmente no calor, é vital que todos se hidratem.

Jogo Limpo: Reforce sempre o conceito de Fair Play (jogo limpo). Ensine que carrinhos (escorregar para pegar a bola) são perigosos e proibidos.
    `,
    },
    {
      id: 5,
      title: "Tempo da atividade",
      content: `
O tempo ideal é de 20 a 30 minutos de jogo corrido.

Divida em dois tempos (ex: 10 ou 15 minutos cada) com um intervalo de 5 minutos para descanso e água.

Para crianças menores, jogos de 5 minutos com mais pausas são mais eficientes.
    `,
    },
    {
      id: 6,
      title: "Improvisação: É Possível?",
      content: `
Com certeza! A criatividade é a melhor amiga do professor:

Bola: Se não tiver uma bola de futebol, use uma bola de vôlei murcha (mais leve) ou improvise com meias velhas e panos amarrados e enrolados com fita crepe ou sacolas plásticas. O importante é que role.

Gols: Como mencionado, use chinelos, garrafas plásticas vazias, mochilas ou pedras para marcar os limites do gol.

Coletes/Diferenciação: Se não houver coletes, peça para uma equipe usar camisetas com manga e a outra, sem manga, ou simplesmente cores de camiseta diferentes (ex: cores claras x cores escuras).
    `,
    },
  ];

  return (
    <View style={styles.container}>
      <HeaderBack />

      <SportDetailsContent
        sport={sport}
        type="Atividade em Grupo"
        initialDescription={"O "}
        description=" é o esporte mais popular do Brasil e uma ferramenta incrível para desenvolver a cooperação, o raciocínio rápido e a coordenação motora. É fácil de adaptar e exige pouco material."
        image={require("../../../assets/images/futebol.png")}
        accordionData={mockData}
        onShare={handleShare}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfbfb",
    paddingHorizontal: 24,
  },

  backButton: {
    width: "100%",
    position: "absolute",
    top: 40,
    left: 16,
    zIndex: 10,
    backgroundColor: "#fbfbfb",
  },
});
