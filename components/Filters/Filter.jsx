import { View, Text, Pressable, StyleSheet } from "react-native";

export const Filter = ({ femItem, masItem }) => {
  return (
    <View style={styles.container}>
      <View style={styles.filterRow}>
        <Text style={styles.filterLabel}>Exibindo:</Text>
        <Pressable style={styles.filterButtonActive}>
          <Text style={styles.filterTextActive}>Todos</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Feminino ({femItem})</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Masculino ({masItem})</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  filterRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 8,
    borderBottomWidth: 1,
    paddingVertical: 12,
    borderColor: "#D3D3D3",
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
  filterButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#EB2F96",
  },
  filterButtonActive: {
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: "#EB2F96",
  },
  button: {
    borderWidth: 1,
    borderColor: "#EB2F96",
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 6,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#EB2F96",
    fontWeight: "400",
    fontSize: 12,
  },
  filterTextActive: {
    color: "#fff",
    fontSize: 12,
  },
});
