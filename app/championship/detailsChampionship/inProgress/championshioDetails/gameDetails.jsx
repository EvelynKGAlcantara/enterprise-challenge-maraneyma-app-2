import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";

import { useRouter } from "expo-router";

import { HeaderBack } from "../../../../../components/Header/HeaderBack";

export default function GameDetails() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <HeaderBack />

      <ScrollView></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfbfbff",
    paddingHorizontal: 24,
  },
});
