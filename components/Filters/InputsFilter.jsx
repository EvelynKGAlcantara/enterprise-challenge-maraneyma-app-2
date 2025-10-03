import { StyleSheet, View, Text } from "react-native";
import { SearchInput } from "../Inputs/SeachInput";
import { SelectInput } from "../Inputs/SelectInput";
import { useState } from "react";
const ano = [
  { label: "Primeiro Ano (Ensino Fundamental)", value: "1" },
  { label: "Segundo Ano (Ensino Fundamental)", value: "2" },
  { label: "Terceiro Ano (Ensino Fundamental)", value: "3" },
  { label: "Quarto Ano (Ensino Fundamental)", value: "4" },
  { label: "Quinto Ano (Ensino Fundamental)", value: "5" },
  { label: "Sexto Ano (Ensino Fundamental)", value: "6" },
  { label: "Sétimo Ano (Ensino Fundamental)", value: "7" },
  { label: "Oitavo Ano (Ensino Fundamental)", value: "8" },
  { label: "Nono Ano (Ensino Fundamental)", value: "9" },
  { label: "Primeiro Colegial (Ensino Médio)", value: "10" },
  { label: "Segundo Colegial (Ensino Médio)", value: "11" },
  { label: "Terceiro Colegial (Ensino Médio)", value: "12" },
];

export const InputsFilter = () => {
  const [schoolYear, setSchoolYear] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.selectArea}>
        <Text style={styles.text}> Filtrar por ano escolar</Text>
        <SelectInput
          value={schoolYear}
          onChange={setSchoolYear}
          options={ano}
          height={32}
        />
      </View>

      <View style={styles.searchInputContainer}>
        <SearchInput />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  searchInputContainer: {},
  selectArea: {
    gap: 10,
    textAlign: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 14,
    alignSelf: "center",
  },
});
