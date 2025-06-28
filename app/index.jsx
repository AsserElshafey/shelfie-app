import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/icon.png")}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          marginVertical: 10,
        }}
      />
      <Text style={styles.title}>The number 1</Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "normal",
          marginTop: 10,
        }}
      >
        Reading list app
      </Text>

      <Link href="/about" style={styles.link}>
        About Page
      </Link>
      <Link href="/contact" style={styles.link}>
        Contact Page
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginTop: 20,
  },
});
