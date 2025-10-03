import { View, Text, StyleSheet, Image } from "react-native";

export default function Championship() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/construcao.png")}
          style={styles.image}
        />
        <Text style={styles.mainText}>Em construção</Text>
        <Text style={styles.subText}>Campeonato</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#F7F9F8",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 8,
  },
  logoContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    gap: 8,
  },
  logo: {
    width: "90%",
    height: 48,
    resizeMode: "contain",
    padding: 60,
    paddingBottom: 40,
  },
  appTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  statusBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9ff",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  statusLabel: {
    fontSize: 13,
    color: "#000000",
    fontFamily: "SofiaSans_400Regular",

    fontWeight: "800",
  },
  statusIndicator: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  greenDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4CAF50",
  },
  statusText: {
    fontSize: 13,
    color: "#333",

    fontFamily: "SofiaSans_400Regular",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  mainText: {
    fontSize: 24,
    textAlign: "center",
    color: "#666",
    fontWeight: "500",
    marginTop: 20,
  },
  subText: {
    fontSize: 16,
    textAlign: "center",
    color: "#999",
    marginTop: 8,
  },
  image: {
    height: "25%",
    resizeMode: "contain",
  },
});
