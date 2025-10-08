import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export const ParticipantCard = ({
  name,
  gender,
  classInfo,
  imageURL,
  onEdit,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {imageURL ? (
          <Image source={{ uri: imageURL }} style={styles.avatar} />
        ) : (
          <Image
            source={{
              uri: "https://via.placeholder.com/50/cccccc/808080?text=👤",
            }}
            style={styles.avatar}
          />
        )}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.gender}>{gender}</Text>
        <Text style={styles.classInfo}>{classInfo}</Text>
      </View>

      <Pressable onPress={onEdit} style={styles.button}>
        <Text style={styles.buttonText}>Editar</Text>
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
    justifyContent: "center",
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
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 25,
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
});
