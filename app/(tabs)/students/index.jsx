import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Header } from "../../../components/Header/index";
import { Button } from "../../../components/Button/index";
import { useRouter } from "expo-router";

export default function Students() {
  const router = useRouter();
  const handleRegister = () => {
    router.push("../../students_screens/registerStudents");
  };
  return (
    <View style={styles.safeArea}>
      <Header title={"Alunos"} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.space}>
            <Image
              source={require("../../../assets/images/register-student.png")}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.subText}>Cadastre e gerencie os alunos</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.spaceFixed}>
        <Button text={"Cadastrar Alunos"} onPress={handleRegister} />
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
    gap: 265,
  },

  subText: {
    fontSize: 18,
    textAlign: "center",
    color: "#BFBFBF",
  },
  image: {
    marginTop: 100,

    width: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
  spaceFixed: {
    paddingTop: 20,
    paddingBottom: 100,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderColor: "#D3D3D3",
  },
});
