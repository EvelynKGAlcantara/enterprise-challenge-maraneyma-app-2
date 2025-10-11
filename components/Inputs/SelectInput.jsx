import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const SelectInput = ({
  label,
  options,
  value,
  onChange,
  width,
  height,
}) => {
  const [visible, setVisible] = useState(false);

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || null;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TouchableOpacity
        style={[
          styles.inputBox,
          width ? { width } : {},
          height ? { height, paddingVertical: 0 } : {},
        ]}
        onPress={() => setVisible(true)}
      >
        <Text style={value ? styles.valueText : styles.placeholder}>
          {selectedLabel ? selectedLabel : "Selecione uma opção"}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#777" />
      </TouchableOpacity>

      <Modal transparent={true} visible={visible} animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setVisible(false)}
          activeOpacity={1}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    onChange(item.value);
                    setVisible(false);
                  }}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: "#515151",
    marginBottom: 6,
  },
  inputBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,

    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  placeholder: {
    color: "#999",
    fontSize: 14,
  },
  valueText: {
    color: "#333",
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    maxHeight: "60%",
  },
  option: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
});
