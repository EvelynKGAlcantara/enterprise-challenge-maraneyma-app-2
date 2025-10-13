import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export const ParticipantCardSelectable = ({
  id,
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

    if (onSelectChange) {
      // 🔧 Agora enviamos o objeto completo + o estado da seleção
      onSelectChange(
        {
          id,
          name,
          gender,
          classInfo,
          image: imageURL,
        },
        newState
      );
    }
  };

  return (
    <View style={[styles.container, selected && styles.containerSelected]}>
      <View
        style={[
          styles.avatarContainer,
          selected ? styles.avatarSelected : styles.avatarNoSelected,
        ]}
      >
        <Image
          source={
            typeof imageURL === "string"
              ? { uri: imageURL }
              : imageURL || require("../../assets/images/profile-circle.png")
          }
          style={styles.avatar}
          resizeMode="cover"
        />
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
  avatarNoSelected: {
    borderWidth: 1,
    borderColor: "#ffffffff",
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
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    fontFamily: "SofiaSans_400Regular",
  },
  gender: {
    fontSize: 12,
    color: "#999",
    marginTop: 2,
    fontFamily: "SofiaSans_400Regular",
  },
  classInfo: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
    fontFamily: "SofiaSans_400Regular",
  },
  buttonSelect: {
    borderColor: "#EB2F96",
  },
  buttonRemove: {
    backgroundColor: "#ffffffff",
  },
  button: {
    borderWidth: 1,
    borderColor: "#EB2F96",
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: "center",
  },
  buttonText: {
    color: "#EB2F96",
    fontWeight: "400",
  },
  textSelect: {
    color: "#EB2F96",
  },
  textRemove: {
    color: "#EB2F96",
  },
});
