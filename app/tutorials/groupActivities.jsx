// app/tutorials/GroupActivities.js
import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import SportCard from "../../components/Cards/ActivityCard";
import { useRouter } from "expo-router";

const sports = [
  {
    title: "Futebol",
    description:
      "Um esporte coletivo jogado com uma bola, onde o objetivo é marcar gols chutando a bola para dentro da meta adversária.",
    shortly: false,
    route: "../tutorials/sports/futebol",
  },
  {
    title: "Handball",
    description:
      "Um esporte de equipe onde os jogadores lançam uma bola com as mãos para marcar gols em uma meta.",
    shortly: false,
    route: "../tutorials/sports/handball",
  },
  {
    title: "Peteca",
    description:
      "Um esporte de raquete onde os jogadores utilizam raquetes para golpear uma peteca sobre uma rede.",
    shortly: false,
    route: "../tutorials/sports/peteca",
  },
  {
    title: "Cabo de guerra",
    description:
      "Um esporte de força onde duas equipes puxam uma corda em direções opostas, com o objetivo de puxar a equipe adversária para o seu lado.",
    shortly: false,
    route: "../tutorials/sports/caboDeGuerra",
  },
  {
    title: "Corrida de revezamento",
    description:
      "Uma modalidade de corrida onde equipes se alternam correndo trechos de um percurso, passando um bastão para o próximo corredor.",
    shortly: true,
  },

  {
    title: "Queimada (Carimbada)",
    description:
      "Um jogo onde um time tenta acertar os jogadores do time adversário com uma bola, queimando-os para eliminá-los do jogo.",
    shortly: true,
  },
];

export default function GroupActivities() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Atividades em grupo</Text>
      <Image
        source={require("../../assets/images/atividades_grupo.png")}
        style={styles.image}
        resizeMode="contain"
      />
      {sports.map((sport, index) => (
        <SportCard
          key={index}
          title={sport.title}
          description={sport.description}
          onPress={() => router.push(sport.route)}
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
    height: 150,
    marginBottom: 16,
  },
});
