import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { RadioButton } from "../../components/Radio/Radio";
import { Button } from "../../components/Button/index";
import { SecondaryButton } from "../../components/Button/SecondaryButton";
import { DeleteModal } from "../../components/Modals/DeleteModal";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function MyProfile() {
  const router = useRouter();
  const [name, setName] = useState("Carl Sagan");
  const [email, setEmail] = useState("carlsagan@gmail.com");
  const [birthYear, setBirthYear] = useState("1934");
  const [selectedOption, setSelectedOption] = useState("1");
  const [modalVisible, setModalVisible] = useState(false);

  const handleSucess = () => {
    router.push("./myProfileEditSucess");
  };
  const handleDelete = () => {
    setModalVisible(true);
  };

  const confirmDelete = () => {
    router.push("./deleteMyProfileSucess");
  };

  const perfil = [
    { label: "Professor", value: "1" },
    { label: "Estudante ou Praticante Independente", value: "2" },
  ];

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
        <Text style={styles.headerTitle}>Meus Dados</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Seu nome</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Nome completo"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Informe seu email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Ano de nascimento</Text>
            <TextInput
              style={styles.inputYear}
              value={birthYear}
              onChangeText={setBirthYear}
              placeholder="0000"
              keyboardType="numeric"
              maxLength={4}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Qual o seu perfil?</Text>
            <RadioButton
              options={perfil}
              selected={selectedOption}
              onSelect={setSelectedOption}
            />
          </View>
        </View>
        <View>
          <View style={styles.buttons}>
            <SecondaryButton
              text={"Excluir minha conta"}
              onPress={handleDelete}
            />
            <Button text={"Salvar"} onPress={handleSucess} />
          </View>
        </View>
      </View>
      <DeleteModal
        visible={modalVisible}
        title={"Excluir"}
        titleBold={true}
        titleBoldText={"Tem certeza que deseja excluir sua conta?"}
        description={
          "1. Seu histórico será perdido \n2. Essa operação não poderá ser desfeita"
        }
        textButton={"Não, desistir"}
        textSecondatyButton={"Sim, excluir"}
        onConfirm={confirmDelete}
        onClose={() => setModalVisible(false)}
      />
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

    fontFamily: "SofiaSans_800ExtraBold",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
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
