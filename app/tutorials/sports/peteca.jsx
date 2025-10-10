import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { SportDetailsContent } from "../../../components/Container/SportDetailContent";
import { HeaderBack } from "../../../components/Header/HeaderBack";

export default function Peteca() {
  const [sport, setSport] = useState("Peteca");

  const handleShare = () => {
    router.push("../app/(tabs)/homeScreen.jsx");
  };

  const mockData = [
    {
      id: 1,
      title: "Como planejar a atividade?",
      content: `Local: Escolha um espaço plano, como a quadra, o pátio ou um salão. O local deve ter um bom pé-direito (altura), pois a peteca é lançada para o alto.

A Rede: Se não houver uma rede de vôlei ou badminton, utilize uma corda, fita zebrada, ou até mesmo um barbante amarrado entre dois postes, cadeiras ou árvores. A altura ideal é na linha do ombro das crianças (aproximadamente 1,5 metro).

Área de Jogo: Delimite o tamanho do "campo" para as equipes. Pode ser um quadrado ou retângulo pequeno, compatível com o espaço disponível.`,
    },
    {
      id: 2,
      title: "Regras a serem seguidas",
      content: `Objetivo: Lançar a peteca por cima da rede/corda, fazendo com que ela caia no chão do campo adversário.

Contatos: O jogador só pode tocar na peteca uma única vez antes de passá-la para o outro lado da rede.

O Toque: A peteca deve ser golpeada sempre de baixo para cima e com a palma da mão aberta. Não pode segurar, carregar, empurrar ou dar dois toques seguidos.

Ponto: O ponto é marcado quando a peteca toca o chão do campo adversário ou quando o time adversário comete uma falta (ex: toca na peteca mais de uma vez, ou a peteca sai dos limites do campo).`,
    },
    {
      id: 3,
      title: "Quantidade de participantes",
      content: `Padrão: Pode ser grupos de 5, 4, 3 ou até mesmo 2 jogadores de cada lado da rede. Isso garante mais movimento e participação.

Adaptação: Se houver muitos alunos, faça revezamento dos jogadores ou monte mais times.`,
    },
    {
      id: 4,
      title: "Dicas para que as crianças não se machuquem",
      content: `Atenção ao Teto/Galhos: Verifique se não há ventiladores ligados ou galhos baixos, pois o movimento da peteca é ascendente.

Aquecimento de Braços: Um rápido movimento de girar os braços e punhos já prepara a musculatura para os lançamentos.

Piso: Garanta que o chão não seja escorregadio, para evitar que as crianças caiam ao tentar alcançar a peteca.`,
    },
    {
      id: 5,
      title: "Tempo da atividade",
      content: `O jogo é geralmente dividido por pontos (ex: ganha quem fizer 12 ou 15 pontos primeiro) ou por tempo (ex: quem tiver mais pontos após 10 minutos de partida).

É ótimo fazer torneios curtos (melhor de 3 sets), garantindo que todos os alunos possam jogar algumas rodadas.`,
    },
    {
      id: 6,
      title: "Improvisação: É Possível?",
      content: `Sim! A Peteca é um dos jogos mais fáceis de improvisar:

Peteca: Se não houver petecas prontas, use materiais simples: Junte um maço de penas (pode ser de galinha, encontradas em feiras ou lixo orgânico) e amarre-as firmemente na cabeça de um cone de borracha, um pedaço de jornal amassado, ou na base de uma garrafa PET cortada. O importante é ter peso na base e algo leve no topo para o "voo".

Rede: Uma corda ou barbante amarrado entre qualquer objeto que possa servir de "poste" (árvores, pilares, cadeiras, baldes virados).

Marcações: Use giz, cordas ou até mesmo tiras de pano para delimitar o campo.`,
    },
  ];

  return (
    <View style={styles.container}>
      <HeaderBack />

      <SportDetailsContent
        sport={sport}
        type="Atividade em Grupo"
        description="A Peteca é um esporte leve e divertido que desenvolve a agilidade, a atenção e a coordenação motora fina. É excelente para ser jogado em duplas e não exige grandes espaços."
        image={require("../../../assets/images/peteca.png")}
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
