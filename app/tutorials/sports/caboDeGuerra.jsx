import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { SportDetailsContent } from "../../../components/Container/SportDetailContent";
import { HeaderBack } from "../../../components/Header/HeaderBack";

export default function CaboDeGuerra() {
  const [sport, setSport] = useState("Cabo de guerra");

  const handleShare = () => {
    router.push("../app/(tabs)/homeScreen.jsx");
  };

  const mockData = [
    {
      id: 1,
      title: "Como planejar a atividade?",
      content:
        "1. Escolha do local: Opte por um espaço amplo e seguro, com o chão livre de obstáculos. Um gramado ou uma quadra são ideais\n\n2. Preparo do material: Você precisará de uma corda resistente e longa o suficiente para todos os participantes. Se possível, marque o centro da corda com um nó ou fita colorida.\n\n3. Demarcação: Trace uma linha no chão que servirá como linha de vitória para cada equipe. Marque também um ponto central na corda, alinhada com a linha central do campo.",
    },
    {
      id: 2,
      title: "Regras a serem seguidas",
      content:
        "Duas equipes se posicionam em lados opostos da linha central.\n\nCada equipe segura a corda, com os participantes enfileirados um atrás do outro.\n\nAo sinal combinado (um grito, um apito), as equipes começam a puxar a corda em direção ao seu lado.\n\nA equipe que conseguir puxar a corda de forma que a marca central ultrapasse a linha de vitória do seu lado vence.\n\nÉ proibido soltar a corda com as mãos, escorregar propositalmente ou usar o corpo para travar a corda.",
    },
    {
      id: 3,
      title: "Quantidade de participantes",
      content:
        "Mínimo: 6 participantes (3 por equipe), para garantir um bom equilíbrio e desafio.\n\nMáximo: O limite é o tamanho da corda e o espaço disponível. O importante é que ambas as equipes tenham um número similar de participantes para tornar a disputa justa",
    },
    {
      id: 4,
      title: "Dicas para que as crianças não se machuquem",
      content:
        "Corda Adequada: Use uma corda grossa e firme, que não machuque as mãos. Evite cordas muito finas ou ásperas.\n\nPosição Correta: Oriente os alunos a se agacharem levemente, mantendo as pernas afastadas para ter mais firmeza. A força deve vir das pernas e do corpo, não apenas dos braços.\n\nSem Correr para Trás: Oriente os alunos a não darem passos para trás de forma descontrolada, pois isso pode causar quedas. O movimento deve ser de puxar, não de recuar.\n\nSupervisão Constante: Fique atento durante toda a atividade, orientando e intervindo se necessário.",
    },
    {
      id: 5,
      title: "Tempo da atividade",
      content:
        "Cada partida de cabo de guerra geralmente dura entre 1 a 3 minutos. O tempo pode variar dependendo da força das equipes e da estratégia utilizada. É recomendável fazer pausas entre as partidas para que os alunos descansem e se hidratem.",
    },
    {
      id: 6,
      title: "Improvisação: É Possível?",
      content:
        "Corda: Se não houver uma corda própria, procure por cintos de segurança de carros antigos, correntes grossas (verifique se não há pontas soltas), ou até mesmo faça uma corda com vários tecidos grossos amarrados e trançados com muita firmeza. O importante é que seja resistente o suficiente para a força das crianças.\n\nLinhas de Demarcação: Em vez de riscar o chão, use pedras, galhos, ou até mesmo roupas de cores diferentes de cada equipe para marcar os limites.",
    },
  ];
  return (
    <View style={styles.container}>
      <HeaderBack />

      <SportDetailsContent
        sport={sport}
        type="Atividade em Grupo"
        description="O cabo de guerra é um jogo clássico que estimula a força, o trabalho em equipe e a coordenação motora. É uma ótima opção para atividades em grupo, promovendo a interação e a diversão entre os alunos."
        image={require("../../../assets/images/cabo-de-guerra.png")}
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
