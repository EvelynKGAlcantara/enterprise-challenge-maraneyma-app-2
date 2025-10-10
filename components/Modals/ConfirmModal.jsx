import { Modal, View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Button } from "../Button/index";
import { Ionicons } from "@expo/vector-icons";

export const ConfirmModal = ({
  visible,
  navigate,
  onClose,
  onConfirm,
  textButton,
  textSecondatyButton,
  title,
  description,
  descriptionBold,
  descriptionContinue,
  insertComponent,
  component,
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={navigate}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>{title}</Text>
            <Pressable onPress={onClose}>
              <Ionicons name="close" size={24} color="#000" />
            </Pressable>
          </View>

          <Text style={styles.message}>
            {description}
            <Text style={styles.messageBold}>{descriptionBold}</Text>
            {descriptionContinue}
          </Text>
          {insertComponent ? <View>{component}</View> : null}
          <View style={styles.buttons}>
            <Button text={textSecondatyButton} onPress={onConfirm} />
            <Button text={textButton} onPress={navigate} />
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
  message: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  messageBold: {
    fontWeight: "800",
    color: "#FF007A",
  },
});
