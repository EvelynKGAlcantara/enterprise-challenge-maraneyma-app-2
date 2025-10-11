import { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import GroupActivities from "../tutorials/groupActivities";
import IndividualActivities from "../tutorials/individualActivities";
import { Header } from "../../components/Header/index";

export default function Tutorials() {
  const [tab, setTab] = useState("group");

  return (
    <View style={styles.container}>
      <Header title={"Tutoriais"} />

      <View style={styles.tabs}>
        <Pressable
          style={[styles.tab, tab === "group" && styles.activeTab]}
          onPress={() => setTab("group")}
        >
          <Text style={tab === "group" ? styles.activeText : styles.tabText}>
            Atividades em Grupo
          </Text>
        </Pressable>
        <Pressable
          style={[styles.tab, tab === "individual" && styles.activeTab]}
          onPress={() => setTab("individual")}
        >
          <Text
            style={tab === "individual" ? styles.activeText : styles.tabText}
          >
            Atividades individuais
          </Text>
        </Pressable>
      </View>

      <View style={{ flex: 1 }}>
        {tab === "group" ? <GroupActivities /> : <IndividualActivities />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 32,
    color: "#515151",
    marginBottom: 24,
    fontFamily: "SofiaSans_800ExtraBold",
  },

  tabs: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "center",
    borderStyle: "solid",
    borderColor: "#F0F0F0",
    gap: 5,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    backgroundColor: "#f8f8f8ff",
  },
  tabText: {
    fontSize: 14,
    color: "#00000085",
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: "#EB2F96",
    backgroundColor: "#ffffff",
  },
  activeText: {
    color: "#EB2F96",
    fontWeight: "500",
  },
});
