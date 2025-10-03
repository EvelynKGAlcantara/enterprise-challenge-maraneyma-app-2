import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SecondaryButton } from "../Button/SecondaryButton";
import { Button } from "../Button/index";

export const DeleteModal = ({
  visible,
  onClose,
  onConfirm,
  textButton,
  textSecondatyButton,
  title,
  description,
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
          <Text style={styles.title}>{title}</Text>
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
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
