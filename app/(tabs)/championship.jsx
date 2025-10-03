import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useRouter } from "expo-router";

export default function Championship() {
  const router = useRouter();
  const handleRegister = () => {
    router.push(".");
  };
  return (
    <View style={styles.safeArea}>
      <Header title={"Campeonatos"} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.space}>
            <Image
              source={require("../../assets/images/championship.png")}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.subText}>Cadastre e gerencie campeonatos</Text>
          </View>
          <View style={styles.space}>
            <Text style={styles.textBold}>Importante:</Text>
            <Text style={styles.subText}>
              Apenas crie um campeonato após ter cadastrado todos os alunos que
              vão participar
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.spaceFixed}>
        <Button text={"Cadastrar campeonato"} onPress={handleRegister} />
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
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
    gap: 16,
  },

  subText: {
    fontSize: 18,
    textAlign: "center",
    color: "#BFBFBF",
  },
  textBold: {
    fontSize: 18,
    textAlign: "center",
    color: "#000000",
    fontWeight: "800",
  },
  image: {
    width: 200,
    marginTop: 20,
    resizeMode: "contain",
    alignSelf: "center",
  },
  space: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  spaceFixed: {
    paddingTop: 20,
    paddingBottom: 100,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderColor: "#D3D3D3",
  },
});
