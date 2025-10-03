import { Header } from "../components/Header/index";
import { Button } from "../components/Button/index";
import { PhotoInput } from "../components/Inputs/PhotoInput";
import { SelectInput } from "../components/Inputs/SelectInput";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { useState } from "react";
import { RadioButton } from "../components/Radio/Radio";

export default function RegisterStudents() {
  const genero = [
    { label: "Feminino", value: "1" },
    { label: "Masculino", value: "2" },
  ];

  const ano = [
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
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [schoolYear, setSchoolYear] = useState("");
  const handleSave = () => {
    router.push("/registrationSuccessScreen");
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
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cadastrar Aluno</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>
            Nome do aluno <Text style={styles.inputDetail}>(obrigatório)</Text>
          </Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Nome completo"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>
            Gênero<Text style={styles.inputDetail}> (obrigatório)</Text>
          </Text>
          <RadioButton
            options={genero}
            selected={selectedOption}
            onSelect={setSelectedOption}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>
            Ano Escolar<Text style={styles.inputDetail}> (obrigatório)</Text>
          </Text>
          <SelectInput
            value={schoolYear}
            options={ano}
            onChange={setSchoolYear}
          />
        </View>

        <View style={styles.inputGroup}>
          <PhotoInput />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>
            Sala / Turno <Text style={styles.inputDetail}>(opcional)</Text>
          </Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Ex.: Sala B"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>
            E-mail do participante{" "}
            <Text style={styles.inputDetail}>(opcional)</Text>
          </Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="E-mail"
          />
        </View>
        <View style={styles.buttons}>
          <Button text={"Salvar"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfbfbff",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 32,
    fontFamily: "SofiaSans_400Regular",
  },
  headerTitle: {
    marginTop: 45,
    fontSize: 32,
    color: "#515151",
    marginBottom: 4,
    fontFamily: "SofiaSans_800ExtraBold",
  },
  headerSubtitle: {
    fontSize: 18,
    color: "#7B7B7B",
    lineHeight: 22,
    fontFamily: "SofiaSans_400Regular",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  googleIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#4285F4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  googleIconText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
  googleButtonText: {
    fontSize: 16,
    color: "#000000",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#CCCCCC",
  },
  dividerText: {
    marginHorizontal: 16,
    fontSize: 14,
    color: "#666666",
  },
  form: {
    marginBottom: 32,
  },
  formTitle: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 20,
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
  inputYear: {
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: 150,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  inputHelper: {
    fontSize: 12,
    color: "#666666",
    marginTop: 4,
  },
  createButton: {
    backgroundColor: "#EB2F96",
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 16,
  },
  createButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  continueButton: {
    backgroundColor: "#EB2F96",
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: "center",
  },
  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginLink: {
    textAlign: "center",
    fontSize: 14,
    color: "#666666",
    textDecorationLine: "underline",
  },
  backButton: {
    width: "100%",
    position: "absolute",
    top: 50,
    left: 16,
    zIndex: 10,
    backgroundColor: "#fbfbfb",
  },

  successContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  checkmarkContainer: {
    marginBottom: 32,
  },
  checkmark: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#52C41A",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#52C41A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  checkmarkText: {
    fontSize: 32,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  successTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
  },
  advanceButton: {
    backgroundColor: "#EB2F96",
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: "center",
  },
  advanceButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  buttons: {
    gap: 10,
  },
  primaryButton: {
    backgroundColor: "#EB2F96",
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  primaryText: {
    color: "#fff",

    fontSize: 16,
  },
});
