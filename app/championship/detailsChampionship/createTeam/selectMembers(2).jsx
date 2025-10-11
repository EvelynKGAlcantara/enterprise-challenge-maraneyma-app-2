import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Button } from "../../../../components/Button";
import { HeaderBack } from "../../../../components/Header/HeaderBack";
import { Filter } from "../../../../components/Filters/Filter";
import { SearchInput } from "../../../../components/Inputs/SeachInput";
import { ParticipantCardSelectable } from "../../../../components/Cards/ParticipantCardSelectable";
import { useRouter } from "expo-router";

export default function SelectMembersScreen() {
  const [selectedCount, setSelectedCount] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    router.push("./createTeamSucess(3)");
  };

  const handleSelectChange = (isSelected) => {
    setSelectedCount((prev) => (isSelected ? prev + 1 : prev - 1));
  };

  const participants = [
    {
      id: "1",
      name: "Lucas Almeida",
      gender: "Masculino",
      classInfo: "Segundo colegial / Sala B",
      image: require("../../../../assets/images/profile-circle.png"),
    },
    {
      id: "2",
      name: "Mariana Souza",
      gender: "Feminino",
      classInfo: "Segundo colegial / Sala B",
      image: require("../../../../assets/images/profile-circle.png"),
    },
    {
      id: "3",
      name: "Gabriel Fernandes",
      gender: "Masculino",
      classInfo: "Segundo colegial / Sala B",
      image: require("../../../../assets/images/profile-circle.png"),
    },
    {
      id: "4",
      name: "Ana Clara Silva",
      gender: "Feminino",
      classInfo: "Segundo colegial / Sala B",
      image: require("../../../../assets/images/profile-circle.png"),
    },
    {
      id: "5",
      name: "Rafael Oliveira",
      gender: "Masculino",
      classInfo: "Segundo colegial / Sala B",
      image: require("../../../../assets/images/profile-circle.png"),
    },
  ];

  return (
    <View style={styles.containerAll}>
      <View style={{ paddingHorizontal: 24 }}>
        <HeaderBack title="Montagem de Equipes" />
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.headerText}>
            <Text style={styles.subtitle}>Selecione os membros da equipe</Text>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Time Sala 1 / 1 ano</Text>
            </View>
          </View>
        </View>
        <View style={styles.filterSection}>
          <Filter
            FirstItem={"Todos"}
            SecondItem={"Disponíveis"}
            ThirdItem={"Selecionados"}
            firtItemNumer={"(13)"}
            SecondItemNumber={"(11)"}
          />
        </View>

        <View style={styles.container}>
          <SearchInput placeholder="Filtre os resultados" />
          <View style={styles.list}>
            {participants.map((p) => (
              <ParticipantCardSelectable
                key={p.id}
                name={p.name}
                gender={p.gender}
                classInfo={p.classInfo}
                imageURL={p.image}
                onSelectChange={handleSelectChange}
              />
            ))}
          </View>
          <View style={{ height: 100 }} />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {selectedCount} aluno{selectedCount !== 1 ? "s" : ""} selecionado
          {selectedCount !== 1 ? "s" : ""}
        </Text>
        <Button text="Salvar equipe" onPress={handleNext} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  containerAll: {
    flex: 1,
    backgroundColor: "#FBFBFB",
  },
  scroll: {
    paddingBottom: 120,
  },
  headerText: {
    marginTop: 8,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "SofiaSans_800ExtraBold",
    color: "#000000",
    marginBottom: 6,
  },
  tag: {
    marginBottom: 16,
    backgroundColor: "#FFFB8F",
    alignSelf: "flex-start",
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  tagText: {
    color: "#000000",
    fontFamily: "SofiaSans_800ExtraBold",
    fontSize: 12,
  },
  filterSection: {
    marginBottom: 24,
  },
  filterLabel: {
    fontSize: 13,
    color: "#7B7B7B",
    marginBottom: 4,
  },
  list: {
    marginTop: 8,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderTopWidth: 1,
    width: "100%",
    borderTopColor: "#EEE",
  },
  footerText: {
    textAlign: "center",
    fontSize: 12,
    color: "#7B7B7B",
    marginBottom: 6,
    fontWeight: "500",
  },
});
