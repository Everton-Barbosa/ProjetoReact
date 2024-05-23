import React from "react";
import { StyleSheet, Text, ScrollView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("./assets/Foto.jpeg")} style={styles.image} />
      <Text style={styles.header}>Everton Barbosa</Text>
      <Text style={styles.subheader}>
        Análise e Desenvolvimento de Sistemas
      </Text>
      <Text style={styles.paragraph}>
      Meu nome é Everton, tenho 21 anos, sou graduando de Análise e Desenvolvimento de Sistemas através do programa Embarque Digital, uma parceria entre a Prefeitura do Recife e o Porto Digital.
      </Text>
      <Text style={styles.paragraph}>
        Algumas tecnologias que estou acostumado:
      </Text>
      {/* <Text style={styles.listItem}>
        • Libraries and Frameworks: React, Angular, Flutter.
      </Text> */}
      <Text style={styles.listItem}>
        • Programming languages: JavaScript, HTML, CSS, PHP, Figma, Linux e ferramentas voltadas para a CyberSegurança, como: NMAP, BURP, DVWA...
      </Text>
      <Text style={styles.listItem}>• Database: MySQL</Text>
      <Text style={styles.listItem}>• Development tools: Git, GitHub.</Text>
      <Text style={styles.paragraph}>
       Atualmente estou estudando CyberSegurança para futuramente aplicar para vagas nessa mesma área.
      </Text>
      <Text style={styles.paragraph}>
        Alguns dos projetos que já fiz parte são: {""}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://shareheart.vercel.app")}
        >
         shareheart.vercel.app
        </Text>{" "}
        {""}
        E você pode acessar outros projetos no meu GitHub: {""}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://github.com/everton-barbosa")}
        >
         github.com/everton-barbosa
        </Text>
        <br></br>
        .
      </Text>
    </ScrollView>
  );
}

function ExperienceScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Projetos:</Text>
      <Text style={styles.subheader}>
        Residência Tecnológica 2023
      </Text>
      <Text style={styles.paragraph}>Mottion</Text>
      <Text style={styles.paragraph}>
        • Um projeto feito por mim e amigos que visava um aplicativo de exercícios físicos para ajudar pessoas que necessitavam praticar exercicios mas não sabiam como começar ou por onde começar.
      </Text>
      <Text style={styles.subheader}>
        Projeto da disciplina de Mobile
      </Text>
      <Text style={styles.paragraph}>ShareHeart</Text>
      <Text style={styles.paragraph}>
        • Aplicativo Mobile que visa a facilitação de doações de itens, dinheiro ou tempo para instituições em necessidade.
      </Text>

    </ScrollView>
  );
}

function EducationScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Formação:</Text>
      <Text style={styles.subheader}>
        Tecnológo em Analise e Desenvolvimento de Sistemas
      </Text>
      <Text style={styles.paragraph}>
        Senac PE - 2023 - 2025
      </Text>
      <Text style={styles.subheader}>Desenvolvimento Wev</Text>
      <Text style={styles.paragraph}>
        IOS - Instituto Oportunidade Social - 2023
      </Text>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Experience") {
              iconName = focused ? "briefcase" : "briefcase-outline";
            } else if (route.name === "Education") {
              iconName = focused ? "school" : "school-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#008080",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#f8f8f8",
            borderTopWidth: 0,
          },
        })}
      >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Experience" component={ExperienceScreen} />
        <Tab.Screen name="Education" component={EducationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subheader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "justify",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
  },
  listItem: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: "justify",
  },
  link: {
    color: "#008080",
    textDecorationLine: "underline",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 75,
    alignSelf: "center",
    marginBottom: 20,
  },
});