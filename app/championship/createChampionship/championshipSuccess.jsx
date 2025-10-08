import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { Button } from "../../../components/Button/index";

export default function ChampionshipSuccess() {
  const router = useRouter();

  const handleAdvance = () => {
    router.replace("../detailsChampionship/championshipListScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.successContainer}>
        <View style={styles.checkmarkContainer}>
          <LottieView
            source={require("../../../assets/images/animations/success_2.json")}
            autoPlay
            loop={false}
            style={{ width: 200, height: 200 }}
          />
        </View>

        <Text style={styles.successTitle}>
          Campeonato criado {"\n"} Agora só falta montar as equipes =)
        </Text>
      </View>

      <View style={styles.buttons}>
        <Button text={"Avançar"} onPress={handleAdvance} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefefff",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  successContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  checkmarkContainer: {
    marginBottom: 16,
  },
  successTitle: {
    fontSize: 24,
    color: "#626262",
    textAlign: "center",
    fontFamily: "SofiaSans_800ExtraBold",
  },
  buttons: {
    gap: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
