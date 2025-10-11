// app/tutorials/IndividualActivities.js
import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import SportCard from "../../components/Cards/ActivityCard";

const sports = [
  {
    title: "Amarelinha",
    description:
      "Um jogo clássico onde os jogadores lançam uma pedra em casas desenhadas no chão e pulam em um pé só, seguindo um percurso determinado.",
    shortly: true,
  },
  {
    title: "Corrida",
    description:
      "Uma disputa simples onde os participantes correm para ver quem chega primeiro a um ponto determinado.",
    shortly: true,
  },
  {
    title: "Corrida de saco",
    description:
      "Uma corrida divertida onde os participantes colocam as pernas dentro de um saco e pulam até a linha de chegada.",
    shortly: true,
  },
  {
    title: "Dança das cadeiras",
    description:
      "Um jogo musical onde os participantes dançam ao redor de cadeiras e, quando a música para, cada um deve sentar em uma cadeira disponível, com uma cadeira a menos a cada rodada.",
    shortly: true,
  },
  {
    title: "Pega-pega",
    description:
      "Um jogo de perseguição onde um jogador é o pegador e tenta tocar nos outros jogadores, que correm para não serem pegos.",
    shortly: true,
  },
  {
    title: "Pular corda",
    description:
      "Uma atividade que envolve pular repetidamente sobre uma corda em movimento, individualmente ou em grupo.",
    shortly: true,
  },
];

export default function IndividualActivities() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Atividades Individuais</Text>
      <Image
        source={require("../../assets/images/pular-corda.png")}
        style={styles.image}
        resizeMode="contain"
      />
      {sports.map((sport, index) => (
        <SportCard
          key={index}
          title={sport.title}
          description={sport.description}
          shortly={sport.shortly}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, marginBottom: 104 },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 12,
    color: "#EB2F96",
    fontFamily: "SofiaSans_800ExtraBold",
  },
  image: {
    width: "100%",
    height: 170,
    marginBottom: 16,
  },
});
