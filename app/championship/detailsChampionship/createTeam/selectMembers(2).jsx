import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { Header } from "../../../../components/Header/index";
import { Button } from "../../../../components/Button/index";
import { useRouter } from "expo-router";
import { useState } from "react";

const mockParticipants = [
  { id: "1", name: "Ana Souza", year: "2º ano", room: "Sala A" },
  { id: "2", name: "Carlos Lima", year: "2º ano", room: "Sala B" },
  { id: "3", name: "João Silva", year: "1º ano", room: "Sala C" },
];

export default function SelectMembersScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState([]);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleSave = () => {
    router.push("../teams/teamCreatedScreen");
  };

  return (
    <View style={styles.safeArea}>
      <Header title={"Montagem de Equipes"} back />
      <View style={styles.container}>
        <Text style={styles.subtitle}>Selecione os membros da equipe</Text>
        <TextInput style={styles.input} placeholder="Filtre os resultados" />

        <FlatList
          data={mockParticipants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.card,
                selected.includes(item.id) && styles.selectedCard,
              ]}
            >
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.details}>
                  {item.year} / {item.room}
                </Text>
              </View>
              <Button
                text={selected.includes(item.id) ? "Remover" : "Selecionar"}
                onPress={() => toggleSelect(item.id)}
                small
                outline={!selected.includes(item.id)}
              />
            </View>
          )}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.selectedText}>
          {selected.length} alunos selecionados
        </Text>
        <Button text="Salvar equipe" onPress={handleSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, padding: 16 },
  subtitle: { fontSize: 18, fontWeight: "700", marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  selectedCard: { borderColor: "#00C851", backgroundColor: "#E6F9ED" },
  name: { fontSize: 16, fontWeight: "600" },
  details: { fontSize: 14, color: "#666" },
  footer: { padding: 16 },
  selectedText: { textAlign: "center", marginBottom: 8, color: "#666" },
});
