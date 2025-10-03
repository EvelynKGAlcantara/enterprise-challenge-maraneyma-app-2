import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#F7F9F8",
          borderTopWidth: 0,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
          overflow: "hidden",
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#7B7B7B",
      }}
    >
      <Tabs.Screen
        name="homeScreen"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                alignItems: "center",
                width: 90,
                borderRightWidth: 1,
                borderRightColor: "#fff",
              }}
            >
              {focused && (
                <View
                  style={{
                    height: 3,
                    width: "60%",
                    backgroundColor: "#000",
                    borderRadius: 2,
                    marginBottom: 6,
                  }}
                />
              )}
              <Text
                style={{
                  fontSize: 12,
                  color,
                  fontWeight: focused ? "bold" : "normal",
                  fontFamily: "SofiaSans_400Regular",
                  marginBottom: 2,
                  height: 16,
                  textAlign: "center",
                }}
              >
                Home
              </Text>
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="tutorials"
        options={{
          title: "Tutoriais",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                alignItems: "center",
                width: 90,
                borderRightWidth: 1,
                borderRightColor: "#fff",
              }}
            >
              {focused && (
                <View
                  style={{
                    height: 3,
                    width: "60%",
                    backgroundColor: "#000",
                    borderRadius: 2,
                    marginBottom: 6,
                  }}
                />
              )}
              <Text
                style={{
                  fontSize: 12,
                  color,
                  fontWeight: focused ? "bold" : "normal",
                  fontFamily: "SofiaSans_400Regular",
                  marginBottom: 2,
                  height: 16,
                  textAlign: "center",
                }}
              >
                Tutoriais
              </Text>
              <Ionicons
                name={focused ? "book" : "book-outline"}
                size={size}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="students/index"
        options={{
          title: "Alunos",
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ alignItems: "center", width: 90 }}>
              {focused && (
                <View
                  style={{
                    height: 3,
                    width: "60%",
                    backgroundColor: "#000",
                    borderRadius: 2,
                    marginBottom: 6,
                  }}
                />
              )}
              <Text
                style={{
                  fontSize: 12,
                  color,
                  fontWeight: focused ? "bold" : "normal",
                  fontFamily: "SofiaSans_400Regular",
                  marginBottom: 2,
                  height: 16,
                  textAlign: "center",
                }}
              >
                Alunos
              </Text>
              <Ionicons
                name={focused ? "people" : "people-outline"}
                size={size}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="championship"
        options={{
          title: "Campeonato",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                alignItems: "center",
                width: 90,
                borderRightWidth: 1,
                borderRightColor: "#fff",
              }}
            >
              {focused && (
                <View
                  style={{
                    height: 3,
                    width: "60%",
                    backgroundColor: "#000",
                    borderRadius: 2,
                    marginBottom: 6,
                  }}
                />
              )}
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  fontSize: 12,
                  color,
                  fontWeight: focused ? "bold" : "normal",
                  fontFamily: "SofiaSans_400Regular",
                  marginBottom: 2,
                  height: 16,
                  textAlign: "center",
                }}
              >
                Campeonato
              </Text>
              <Ionicons
                name={focused ? "trophy" : "trophy-outline"}
                size={size}
                color={color}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
