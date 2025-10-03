import { Pressable, Text, StyleSheet } from "react-native";

export const ActionButton = ({ active, onPress, display }) => {
  return (
    // O onPress aqui é passado via props da tela em que o componente é chamado para o componente
    <Pressable
      style={active ? styles.contextButtonActive : null}
      onPress={onPress}
    >
      {/* O display aqui é o texto que vai ser passado da página onde o componente será chamado para o componente */}
      <Text style={styles.contextButtonText}>{display}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contextButtonActive: {
    backgroundColor: "#ee9613ff",
    borderRadius: 8,
  },
  contextButtonText: {
    fontSize: 12.5,
    color: "white",
    padding: 8,
  },
});
