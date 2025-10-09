import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export const ParticipantCardSelectable = ({
  name,
  gender,
  classInfo,
  imageURL,
  onSelectChange,
}) => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    const newState = !selected;
    setSelected(newState);
    if (onSelectChange) onSelectChange(newState);
  };

  // 🔒 Se for número, é require(). Se for string, é URL remota
  const imageSource =
    typeof imageURL === "number"
      ? imageURL
      : imageURL
      ? { uri: imageURL }
      : { uri: "https://via.placeholder.com/50/cccccc/808080?text=👤" };

  return (
    <View style={[styles.container, selected && styles.containerSelected]}>
      <View style={[styles.avatarContainer, selected && styles.avatarSelected]}>
        <Image source={imageSource} style={styles.avatar} resizeMode="cover" />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.gender}>{gender}</Text>
        <Text style={styles.classInfo}>{classInfo}</Text>
      </View>

      <Pressable
        onPress={handlePress}
        style={[
          styles.button,
          selected ? styles.buttonRemove : styles.buttonSelect,
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            selected ? styles.textRemove : styles.textSelect,
          ]}
        >
          {selected ? "Remover" : "Selecionar"}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    borderRadius: 8,
    marginVertical: 4,
  },
  containerSelected: {
    borderWidth: 1.5,
    borderColor: "#77E36F",
    backgroundColor: "#F6FFF6",
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    overflow: "hidden",
  },
  avatarSelected: {
    borderWidth: 2,
    borderColor: "#77E36F",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  gender: {
    fontSize: 13,
    color: "#999",
    marginTop: 2,
  },
  classInfo: {
    fontSize: 13,
    color: "#777",
    marginTop: 2,
  },
  button: {
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  buttonSelect: {
    borderColor: "#EB2F96",
  },
  buttonRemove: {
    borderColor: "#77E36F",
    backgroundColor: "#E8FFE8",
  },
  buttonText: {
    fontWeight: "500",
  },
  textSelect: {
    color: "#EB2F96",
  },
  textRemove: {
    color: "#1D7A25",
  },
});
