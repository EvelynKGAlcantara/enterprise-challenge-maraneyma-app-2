import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button } from "../../../../components/Button";
import { HeaderBack } from "../../../../components/Header/HeaderBack";
import { Filter } from "../../../../components/Filters/Filter";
import { SearchInput } from "../../../../components/Inputs/SeachInput";
import { ParticipantCardSelectable } from "../../../../components/Cards/ParticipantCardSelectable";
import { useRouter } from "expo-router";
import { useStudents } from "../../../context/Context";

export default function SelectMembersScreen() {
  const router = useRouter();
  const { addTeams, setTeamName, teamName, students } = useStudents();
  const [selectedParticipants, setSelectedParticipants] = useState([]);

  const handleSelectChange = (participant, isSelected) => {
    setSelectedParticipants((prev) => {
      if (isSelected) {
        return [...prev, participant];
      } else {
        return prev.filter((p) => p.id !== participant.id);
      }
    });
  };

  const handleNext = () => {
    const newTeam = {
      id: Date.now().toString(),
      participants: selectedParticipants,
      name: teamName,
      description: "Primeiro Colegial",
    };

    addTeams(newTeam);
    router.push("./createTeamSucess(3)");
  };

  return (
    <View style={styles.containerAll}>
      {/* Header */}
      <View style={{ paddingHorizontal: 24 }}>
        <HeaderBack title="Montagem de Equipes" />
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Título e tag */}
        <View style={styles.container}>
          <View style={styles.headerText}>
            <Text style={styles.subtitle}>Selecione os membros da equipe</Text>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Time da Sala 2 / Segundo Ano</Text>
            </View>
          </View>
        </View>

        {/* Filtros e contagem */}
        <View style={styles.filterSection}>
          <Filter
            FirstItem="Disponíveis"
            SecondItem="Selecionados"
            ThirdItem="Selecionados"
            firtItemNumer={`(${students.length})`}
            SecondItemNumber={`(${selectedParticipants.length})`}
          />
        </View>

        {/* Lista de alunos */}
        <View style={styles.container}>
          <SearchInput placeholder="Filtre os resultados" />
          <View style={styles.list}>
            {students.map((p) => (
              <ParticipantCardSelectable
                key={p.id}
                id={p.id}
                name={p.name}
                gender={p.gender}
                classInfo={p.classroom}
                imageURL={p.image}
                onSelectChange={handleSelectChange}
              />
            ))}
          </View>

          <View style={{ height: 100 }} />
        </View>
      </ScrollView>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {selectedParticipants.length} aluno
          {selectedParticipants.length !== 1 ? "s" : ""} selecionado
          {selectedParticipants.length !== 1 ? "s" : ""}
        </Text>
        <Button
          text="Salvar equipe"
          onPress={handleNext}
          disabled={selectedParticipants.length === 0}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerAll: {
    flex: 1,
    backgroundColor: "#FBFBFB",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
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
