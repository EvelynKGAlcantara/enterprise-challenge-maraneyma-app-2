import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { SportDetailsContent } from "../../../components/Container/SportDetailContent";
import { HeaderBack } from "../../../components/Header/HeaderBack";

export default function Handball() {
  const [sport, setSport] = useState("Handball");

  const handleShare = () => {
    router.push("../app/(tabs)/homeScreen.jsx");
  };

  const mockData = [
    {
      id: 1,
      title: "Como planejar a atividade?",
      content: `
Local: A quadra é o local ideal, mas um pátio cimentado ou um campo de terra com bom piso também servem.

O Gol: Se não houver traves oficiais, use objetos como cadeiras, caixotes, cones podem servir.

Área de 6 Metros (Restrição): Essencial no Handebol! Use giz, fita crepe, ou cordas no chão para demarcar a área onde apenas o goleiro pode pisar (cerca de 6 passos grandes à frente do gol).
    `,
    },
    {
      id: 2,
      title: "Regras a serem seguidas",
      content: `
Objetivo: Jogar a bola com as mãos para dentro do gol adversário.

Andar e Driblar: O jogador pode dar, no máximo, 3 passos com a bola na mão. Para se movimentar mais, ele deve quicar a bola no chão (driblar).

Tempo de Posse: O jogador só pode segurar a bola por 3 segundos antes de passar, arremessar ou driblar. Isso incentiva o passe rápido.

Toque: É proibido dar rasteiras, empurrar, puxar ou segurar o adversário. A defesa é feita colocando o corpo na frente (sempre tocar na bola, não no colega).

Arremesso de 7 Metros: Caso um jogador sofra uma falta clara na hora do arremesso, ele tem direito a um chute livre, cobrado de uma linha a 7 metros do gol.
    `,
    },
    {
      id: 3,
      title: "Quantidade de participantes",
      content: `
Padrão (Ideal): 5 a 7 jogadores por time, incluindo o goleiro.

Adaptação: Se o espaço for pequeno ou o número de alunos for reduzido, jogue com 4 ou 3 por equipe.

Regra de Ouro: Garanta que ambos os times tenham a mesma quantidade de jogadores para um jogo equilibrado.
    `,
    },
    {
      id: 4,
      title: "Dicas para que as crianças não se machuquem",
      content: `
Aquecimento: Priorize o aquecimento dos braços e ombros, que são muito usados nos arremessos.

Arremesso: Oriente os alunos a não arremessarem a bola com força excessiva na cabeça ou rosto do goleiro/adversário.

Quedas: Ensine as crianças a caírem de lado ou a rolar, caso percam o equilíbrio, em vez de cair "travadas" no chão.

Bola Adequada: Use uma bola que seja do tamanho ideal para as mãos das crianças. Bolas muito grandes ou pesadas dificultam o manejo e o arremesso correto.
    `,
    },
    {
      id: 5,
      title: "Tempo da atividade",
      content: `
O tempo ideal de jogo é de 20 a 30 minutos no total.

Divida em dois tempos (ex: 10 a 15 minutos cada) com um intervalo de 5 minutos para descanso e hidratação.

Com crianças menores ou muito ativas, jogos de 5 a 7 minutos com pausas frequentes funcionam melhor.
    `,
    },
    {
      id: 6,
      title: "Improvisação: É Possível?",
      content: `
O Handebol é muito adaptável!

Bola: Se não houver uma bola de Handebol oficial, use uma bola de borracha macia (de parque), uma bola de tênis mais leve (para alunos menores), ou até mesmo uma bola de meias e panos para treinar passes e arremessos sem o jogo completo.

Gols: Marque os gols com cordas suspensas, caixotes ou pilhas de pneus velhos (se disponíveis e seguros) em vez de traves caras.

Linha de 6 Metros: Use tampas de garrafa PET, chinelos, ou tiras de jornal/papelão no chão para marcar a linha de restrição.
    `,
    },
  ];

  return (
    <View style={styles.container}>
      <HeaderBack />

      <SportDetailsContent
        sport={sport}
        type="Atividade em Grupo"
        description="O Handebol é um esporte dinâmico, jogado com as mãos, que desenvolve a agilidade, o raciocínio tático e a coordenação óculo-manual (mão-olho). É excelente para espaços pequenos."
        image={require("../../../assets/images/handball.png")}
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
