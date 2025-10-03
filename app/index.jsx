import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { useEffect } from "react";

import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
const { width } = Dimensions.get("window");

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/onBoarding");
    }, 4000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <LinearGradient
      colors={["#F0F4F3", "#FCFDFD"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <View>
        <Image
          source={require("../assets/images/logo-maraneyma.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.slide}>
        <Image
          style={styles.Image}
          source={require("../assets/images/pular-corda.png")}
        />
      </View>

      <View>
        <Text style={styles.title}>Seu guia de</Text>
        <Text style={styles.titleBold}>esportes escolares</Text>
      </View>
      <View>
        <Text style={styles.text}>
          <Text style={styles.textBoldPurple}>"Maraneyma”</Text> significa
          <Text style={styles.textBoldBlack}> "saúde"</Text> {"\n"} em{" "}
          <Text style={styles.textBoldBlack}>Tupi-Guarani.</Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "#000000",
    fontFamily: "SofiaSans_400Regular",
    marginTop: 70,
  },
  titleBold: {
    fontWeight: "bold",
    fontSize: 30,
    fontFamily: "SofiaSans_400Regular",
  },
  text: {
    textAlign: "center",
    color: "#000000",
    fontSize: 16,
    fontFamily: "SofiaSans_400Regular",
    marginTop: 8,
    marginBottom: 10,
  },
  textBoldPurple: {
    fontWeight: "bold",
    color: "#EB2F96",
    fontFamily: "SofiaSans_400Regular",
  },
  textBoldBlack: {
    fontWeight: "bold",
    color: "#000000",
    fontFamily: "SofiaSans_400Regular",
  },

  tabs: {
    flexDirection: "row",
  },

  logo: {
    height: 100,
    resizeMode: "contain",
    marginTop: 110,
    marginBottom: 70,
  },
  slide: {
    alignItems: "center",
  },
  Image: {
    resizeMode: "contain",
    width: 400,
    height: 270,
  },
});
