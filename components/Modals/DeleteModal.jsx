import React from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import { SecondaryButton } from "../Button/SecondaryButton";
import { Button } from "../Button/index";
import { Ionicons } from "@expo/vector-icons";

export const DeleteModal = ({
  visible,
  onClose,
  onConfirm,
  textButton,
  textSecondatyButton,
  title,
  description,
  titleBold,
  titleBoldText,
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>{title}</Text>
            <Pressable onPress={onClose}>
              <Ionicons name="close" size={24} color="#000" />
            </Pressable>
          </View>

          {titleBold ? (
            <Text style={styles.titleBoldText}>{titleBoldText}</Text>
          ) : null}
          <Text style={styles.message}>{description}</Text>

          <View style={styles.buttons}>
            <SecondaryButton text={textSecondatyButton} onPress={onConfirm} />
            <Button text={textButton} onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 20,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#F0F0F0",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  titleBoldText: {
    marginBottom: 16,
    fontSize: 18,
    fontFamily: "SofiaSans_800ExtraBold",
  },
  message: {
    fontSize: 18,
    marginBottom: 30,
    fontFamily: "SofiaSans_400Regular",
  },
  confirmButton: {
    borderWidth: 1,
    borderColor: "#FF4D4F",
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
  },
  confirmText: {
    color: "#FF4D4F",
    textAlign: "center",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#FF007A",
    padding: 12,
    borderRadius: 6,
  },
  cancelText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
