import { Button } from "../../../components/Button/index";
import { SelectInput } from "../../../components/Inputs/SelectInput";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { useState } from "react";
import { RadioButton } from "../../../components/Radio/Radio";
import { HeaderBack } from "../../../components/Header/HeaderBack";
import { useStudents } from "../../context/Context";

export default function ChampionshipForm() {
  const router = useRouter();
  const { championshipType, addChampionship } = useStudents();

  const [championshipName, setChampionshipName] = useState("");
  const [schoolYear, setSchoolYear] = useState("");
  const [gender, setGender] = useState(null);

  const schoolYears = [
    {
      label: "Primeiro Ano (Ensino Fundamental)",
      value: "Primeiro Ano (Ensino Fundamental)",
    },
    {
      label: "Segundo Ano (Ensino Fundamental)",
      value: "Segundo Ano (Ensino Fundamental)",
    },
    {
      label: "Terceiro Ano (Ensino Fundamental)",
      value: "Terceiro Ano (Ensino Fundamental)",
    },
    {
      label: "Quarto Ano (Ensino Fundamental)",
      value: "Quarto Ano (Ensino Fundamental)",
    },
    {
      label: "Quinto Ano (Ensino Fundamental)",
      value: "Quinto Ano (Ensino Fundamental)",
    },
    {
      label: "Sexto Ano (Ensino Fundamental)",
      value: "Sexto Ano (Ensino Fundamental)",
    },
    {
      label: "Sétimo Ano (Ensino Fundamental)",
      value: "Sétimo Ano (Ensino Fundamental)",
    },
    {
      label: "Oitavo Ano (Ensino Fundamental)",
      value: "Oitavo Ano (Ensino Fundamental)",
    },
    {
      label: "Nono Ano (Ensino Fundamental)",
      value: "Nono Ano (Ensino Fundamental)",
    },
    {
      label: "Primeiro Colegial (Ensino Médio)",
      value: "Primeiro Colegial (Ensino Médio)",
    },
    {
      label: "Segundo Colegial (Ensino Médio)",
      value: "Segundo Colegial (Ensino Médio)",
    },
    {
      label: "Terceiro Colegial (Ensino Médio)",
      value: "Terceiro Colegial (Ensino Médio)",
    },
  ];

  const genderOptions = [
    { label: "Feminino", value: "Feminino" },
    { label: "Masculino", value: "Masculino" },
    { label: "Misto", value: "Misto" },
  ];

  const handleNext = () => {
    if (!championshipName || !schoolYear || !gender) {
      return;
    }

    addChampionship({ championshipName, schoolYear, gender, championshipType });
    router.push("./championshipSuccess");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <View style={styles.containerHeader}>
        <HeaderBack />
      </View>
      <View style={styles.containerContent}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.innerContainer}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Dados do campeonato</Text>
              <Text style={styles.badge}>Campeonato de {championshipType}</Text>
            </View>

            <View style={styles.content}>
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
                    Ano escolar{" "}
                    <Text style={styles.inputDetail}>(obrigatório)</Text>
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
              </View>

              <View style={styles.buttons}>
                <Button text={"Avançar"} onPress={handleNext} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfbfbff",
  },
  containerContent: {
    flex: 1,
    paddingHorizontal: 24,
  },
  innerContainer: {
    flex: 1,
  },
  header: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 26,
    fontFamily: "SofiaSans_800ExtraBold",
    color: "#515151",
    marginBottom: 8,
  },
  badge: {
    backgroundColor: "#F4F73E",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
    fontSize: 14,
    fontFamily: "SofiaSans_800ExtraBold",
    color: "#515151",
    alignSelf: "flex-start",
  },
  form: {
    flex: 1,
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

  buttons: {
    marginTop: 20,
    paddingBottom: 40,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
  },
  containerHeader: {
    paddingHorizontal: 24,
  },
});
