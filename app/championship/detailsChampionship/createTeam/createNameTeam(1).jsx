import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Header } from "../../../../components/Header/index";
import { Button } from "../../../../components/Button/index";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function CreateTeamScreen() {
  const router = useRouter();
  const [teamName, setTeamName] = useState("");
  const [teamSymbol, setTeamSymbol] = useState(null);

  const handleNext = () => {
    if (teamName.trim() !== "") {
      router.push("../teams/selectMembersScreen");
    }
  };

  return (
    <View style={styles.safeArea}>
      <Header title={"Montagem de Equipes"} back />
      <View style={styles.container}>
        <Text style={styles.title}>Crie um nome pra equipe</Text>

        <TextInput
          style={styles.input}
          placeholder="Ex.: Time Sala 1"
          value={teamName}
          onChangeText={setTeamName}
        />

        <View style={styles.imageUpload}>
          <Image
            // source={require("../../assets/images/register-student.png")}
            style={styles.image}
          />
          <TouchableOpacity style={styles.uploadBtn}>
            <Text style={styles.uploadText}>Subir imagem</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Button text="Avançar" onPress={handleNext} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: { padding: 20, flex: 1 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  imageUpload: { alignItems: "center", marginTop: 10 },
  image: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  uploadBtn: {
    borderWidth: 1,
    borderColor: "#FF1493",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  uploadText: { color: "#FF1493", fontWeight: "600" },
  footer: { padding: 16 },
});
