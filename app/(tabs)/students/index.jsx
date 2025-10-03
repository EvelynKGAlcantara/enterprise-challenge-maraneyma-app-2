import { View, Text, StyleSheet, Image } from "react-native";
import { Header } from "../../../components/Header/index";
import { Button } from "../../../components/Button/index";
import { useRouter } from "expo-router";

export default function Students() {
  const router = useRouter();
  const handleRegister = () => {
    router.push("../../registerStudents");
  };
  return (
    <View style={styles.safeArea}>
      <Header title={"Alunos"} />
      <View style={styles.container}>
        <View style={styles.space}>
          <Image
            source={require("../../../assets/images/register-student.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.subText}>Cadastre e gerencie os alunos</Text>
        </View>
        <View style={styles.space}>
          <Button text={"Cadastrar Alunos"} onPress={handleRegister} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  container: {
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 16,
    gap: 290,
  },

  subText: {
    fontSize: 18,
    textAlign: "center",
    color: "#BFBFBF",
  },
  image: {
    marginTop: 100,
    marginBottom: 20,
    resizeMode: "contain",
    alignSelf: "center",
  },
});
