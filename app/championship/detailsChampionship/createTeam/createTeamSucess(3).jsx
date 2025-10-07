import { View, Text, StyleSheet, Image } from "react-native";
import { Header } from "../../../../components/Header/index";
import { Button } from "../../../../components/Button/index";
import { useRouter } from "expo-router";

export default function TeamCreatedScreen() {
  const router = useRouter();

  return (
    <View style={styles.safeArea}>
      <Header title={"Montagem de Equipes"} back />
      <View style={styles.container}>
        <Image
          //   source={require("../../assets/images/success.png")}
          style={styles.image}
        />
        <Text style={styles.text}>Equipe criada com sucesso!</Text>
      </View>
      <View style={styles.footer}>
        <Button text="Avançar" onPress={() => router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  image: { width: 120, height: 120, marginBottom: 20 },
  text: { fontSize: 20, fontWeight: "700", textAlign: "center" },
  footer: { padding: 16 },
});
