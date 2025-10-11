import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import Accordion from "../../components/Accordion/index";

export const SportDetailsContent = ({
  sport,
  type,
  description,
  image,
  accordionData,
  onShare,
  initialDescription,
}) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.headerTitle}>{sport}</Text>

      <Text style={styles.tag}>{type}</Text>

      {image && (
        <Image source={image} style={styles.image} resizeMode="contain" />
      )}

      <Text style={styles.bodyText}>
        {initialDescription}
        <Text style={styles.bodyTextBold}>{sport}</Text>
        {description}
      </Text>

      <View style={{ marginTop: 24 }}>
        {accordionData?.map((item) => (
          <Accordion key={item.id} title={item.title} content={item.content} />
        ))}
      </View>

      <View style={styles.buttons}>
        <Pressable style={styles.primaryButton} onPress={onShare}>
          <Text style={styles.primaryText}>Compartilhar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
  },

  headerTitle: {
    marginTop: 8,
    fontSize: 32,
    color: "#515151",
    marginBottom: 8,
    fontFamily: "SofiaSans_800ExtraBold",
  },

  image: {
    width: 310,
    height: 200,
    resizeMode: "contain",
  },

  tag: {
    backgroundColor: "#FFFB8F",
    width: 160,
    borderRadius: 4,
    textAlign: "center",
    padding: 5,
    fontSize: 14,
    fontFamily: "SofiaSans_600SemiBold",
    marginBottom: 16,
  },

  bodyText: {
    marginVertical: 12,
    fontSize: 16,
    color: "#7B7B7B",
    fontFamily: "SofiaSans_400Regular",
  },
  bodyTextBold: {
    color: "#000000ff",
    fontFamily: "SofiaSans_800ExtraBold",
  },

  primaryButton: {
    backgroundColor: "#EB2F96",
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
  },

  primaryText: {
    color: "#fff",
    fontSize: 16,
  },

  buttons: {
    marginTop: 16,
    marginBottom: 16,
  },
});
