import { Header } from "../../components/Header/index";
import { Button } from "../../components/Button/index";
import { PhotoInput } from "../../components/Inputs/PhotoInput";
import { SelectInput } from "../../components/Inputs/SelectInput";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { useState } from "react";
import { RadioButton } from "../../components/Radio/Radio";
import { useStudents } from "../context/Context";

export default function RegisterStudents() {
  const router = useRouter();
  const { addStudent } = useStudents();

  const [name, setName] = useState("");
  const [gender, setGender] = useState(null);
  const [schoolYear, setSchoolYear] = useState("");
  const [photo, setPhoto] = useState("");
  const [classroom, setClassroom] = useState("");
  const [email, setEmail] = useState("");

  const genero = [
    { label: "Feminino", value: "Feminino" },
    { label: "Masculino", value: "Masculino" },
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

  const handleSave = () => {
    if (!name || !gender || !schoolYear) {
      alert("Por favor, preencha os campos obrigatórios.");
      return;
    }

    const newStudent = {
      id: Date.now().toString(),
      name,
      gender,
      schoolYear,
      image: require("../../assets/images/profile-circle.png"),
      classroom: classroom || "Não definida",
      email: email || "",
    };

    addStudent(newStudent);
    router.push("./registerStudentsSucesScreen");
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
          <Text style={styles.headerTitle}>Cadastrar Aluno</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>
              Nome do aluno{" "}
              <Text style={styles.inputDetail}>(obrigatório)</Text>
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
              selected={gender}
              onSelect={setGender}
            />
          </View>

          <View>
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
            <Text style={styles.inputLabel}>
              Foto <Text style={styles.inputDetail}>(opcional)</Text>
            </Text>
            <PhotoInput onChangePhoto={setPhoto} />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>
              Sala / Turno <Text style={styles.inputDetail}>(opcional)</Text>
            </Text>
            <TextInput
              style={styles.input}
              value={classroom}
              onChangeText={setClassroom}
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
              value={email}
              onChangeText={setEmail}
              placeholder="E-mail"
            />
          </View>

          <View style={styles.buttons}>
            <Button text={"Salvar"} onPress={handleSave} />
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
    marginBottom: 16,
    fontFamily: "SofiaSans_400Regular",
  },
  headerTitle: {
    marginTop: 45,
    fontSize: 32,
    color: "#515151",
    fontFamily: "SofiaSans_800ExtraBold",
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
    gap: 10,
    marginBottom: 120,
  },
  backButton: {
    width: "100%",
    position: "absolute",
    top: 50,
    left: 16,
    zIndex: 10,
    backgroundColor: "#fbfbfb",
  },
});
