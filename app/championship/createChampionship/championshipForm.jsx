import { Button } from "../../../components/Button/index";
import { SelectInput } from "../../../components/Inputs/SelectInput";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { useState } from "react";
import { RadioButton } from "../../../components/Radio/Radio";

export default function ChampionshipForm() {
  const router = useRouter();

  const [championshipName, setChampionshipName] = useState("");
  const [schoolYear, setSchoolYear] = useState("");
  const [gender, setGender] = useState(null);

  const schoolYears = [
    { label: "Primeiro Ano (Ensino Fundamental)", value: "1" },
    { label: "Segundo Ano (Ensino Fundamental)", value: "2" },
    { label: "Terceiro Ano (Ensino Fundamental)", value: "3" },
    { label: "Quarto Ano (Ensino Fundamental)", value: "4" },
    { label: "Quinto Ano (Ensino Fundamental)", value: "5" },
    { label: "Sexto Ano (Ensino Fundamental)", value: "6" },
    { label: "Sétimo Ano (Ensino Fundamental)", value: "7" },
    { label: "Oitavo Ano (Ensino Fundamental)", value: "8" },
    { label: "Nono Ano (Ensino Fundamental)", value: "9" },
    { label: "Primeiro Colegial (Ensino Médio)", value: "10" },
    { label: "Segundo Colegial (Ensino Médio)", value: "11" },
    { label: "Terceiro Colegial (Ensino Médio)", value: "12" },
  ];

  const genderOptions = [
    { label: "Feminino", value: "F" },
    { label: "Masculino", value: "M" },
    { label: "Misto", value: "X" },
  ];

  const handleNext = () => {
    router.push("./championshipSuccess");
  };

  return (
    <View style={styles.container}>
      <AntDesign
        name="arrow-left"
        size={40}
        color="#EB2F96"
        onPress={router.back}
        style={styles.backButton}
      />
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Dados do campeonato</Text>
          <Text style={styles.badge}>Campeonato de futebol</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>
              Nome do campeonato{" "}
              <Text style={styles.inputDetail}>(obrigatório)</Text>
            </Text>
            <TextInput
              style={styles.input}
              value={championshipName}
              onChangeText={setChampionshipName}
              placeholder="Ex.: Jogos estudantis"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>
              Ano escolar <Text style={styles.inputDetail}>(obrigatório)</Text>
            </Text>
            <SelectInput
              value={schoolYear}
              options={schoolYears}
              onChange={setSchoolYear}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>
              Gênero dos participantes{" "}
              <Text style={styles.inputDetail}>(obrigatório)</Text>
            </Text>
            <RadioButton
              options={genderOptions}
              selected={gender}
              onSelect={setGender}
            />
          </View>

          <View style={styles.buttons}>
            <Button text={"Avançar"} onPress={handleNext} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfbfbff",
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  header: {
    marginTop: 62,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 28,
    color: "#515151",
    fontFamily: "SofiaSans_800ExtraBold",
    marginBottom: 8,
  },
  badge: {
    backgroundColor: "#F4F73E",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
    fontSize: 14,
    fontFamily: "SofiaSans_600SemiBold",
    color: "#515151",
    alignSelf: "flex-start",
  },
  form: {
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: "#000000",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  inputDetail: {
    color: "#cbcbcbff",
  },
  backButton: {
    width: "100%",
    position: "absolute",
    top: 50,
    left: 16,
    zIndex: 10,
    backgroundColor: "#fbfbfb",
  },
  buttons: {
    marginTop: 20,
  },
});
