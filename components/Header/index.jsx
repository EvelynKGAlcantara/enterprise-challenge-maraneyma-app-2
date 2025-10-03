import { View, Text, Image, StyleSheet } from "react-native";

export const Header = ({ imageSource, title }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <View style={styles.logoContainer}>
          {imageSource ? (
            <Image style={styles.logo} source={imageSource} />
          ) : (
            <Text style={styles.title}>{title}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  title: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 32,
    color: "#515151",
    marginBottom: 16,
    fontFamily: "SofiaSans_800ExtraBold",
  },
});
