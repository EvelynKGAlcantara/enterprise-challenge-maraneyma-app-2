import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CreateAccountScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleCreateAccount = () => {
    router.push("/userDataScreen");
  };

  const handleGoogleLogin = () => {
    // Implementar login com Google
  };

  const handleAlreadyHaveAccount = () => {
    router.push("/loginScreen");
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true}
      extraScrollHeight={20}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Criar conta</Text>
          <Text style={styles.headerSubtitle}>
            <Text style={styles.headerSubtitleBold}>
              Opção mais simples:{"\n"}
            </Text>
            Crie a partir da sua conta no Google
          </Text>
        </View>

        <Pressable style={styles.googleButton} onPress={handleGoogleLogin}>
          <View style={styles.googleIcon}>
            <Image
              source={require("../assets/images/logo-google.png")}
              style={styles.googleIconImage}
            />
          </View>
          <Text style={styles.googleButtonText}>Continue com o Google</Text>
        </Pressable>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OU</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.form}>
          <Text style={styles.headerSubtitleBody}>
            Crie um usuário e uma senha
          </Text>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Qual o seu email?</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Crie uma senha de acesso</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputPassword}
                placeholder="Senha"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <AntDesign
                  name={showPassword ? "eye" : "eye-invisible"}
                  size={20}
                  color="#00000045"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.buttons}>
          <Pressable style={styles.primaryButton} onPress={handleCreateAccount}>
            <Text style={styles.primaryText}>Criar conta</Text>
          </Pressable>
          <Pressable
            style={styles.secondaryButton}
            onPress={handleAlreadyHaveAccount}
          >
            <Text style={styles.secondaryText}>Já tenho uma conta</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfbfbff",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 32,
    fontFamily: "SofiaSans_400Regular",
  },
  headerTitle: {
    fontSize: 32,
    color: "#515151",
    fontFamily: "SofiaSans_800ExtraBold",
    marginBottom: 24,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#7B7B7B",
    lineHeight: 22,
    fontFamily: "SofiaSans_400Regular",
  },
  headerSubtitleBody: {
    fontSize: 18,
    color: "#7B7B7B",
    lineHeight: 22,
    marginBottom: 24,
    marginTop: 24,
    fontFamily: "SofiaSans_400Regular",
  },
  headerSubtitleBold: {
    fontWeight: "bold",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  googleButtonText: {
    fontSize: 17,
    color: "#1890FF",
    fontWeight: "700",
    marginLeft: 20,
  },
  googleIconImage: {
    marginLeft: 18,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#CCCCCC",
  },
  dividerText: {
    marginHorizontal: 16,
    fontSize: 16,
    color: "#000000",
    fontWeight: "500",
  },
  form: {
    marginBottom: 86,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: "#000000",
    marginBottom: 8,
    fontFamily: "Roboto_400Regular",
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  buttons: {
    gap: 10,
  },
  primaryButton: {
    backgroundColor: "#EB2F96",
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  primaryText: {
    color: "#fff",
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  secondaryText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 2,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  inputPassword: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
});
