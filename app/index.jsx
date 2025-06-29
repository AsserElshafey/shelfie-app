import { StyleSheet, Image, View } from "react-native";
import { Link } from "expo-router";

// themed components
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require("../assets/icon.png")}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          marginVertical: 10,
        }}
      />
      <ThemedText style={styles.title} title>
        The number 1
      </ThemedText>
      <ThemedText
        style={{
          fontSize: 16,
          fontWeight: "normal",
          marginTop: 10,
        }}
      >
        Reading list app
      </ThemedText>

      <View style={styles.Links}>
        <Link href="/login" style={styles.link}>
          Login
        </Link>
        <Link href="/register" style={styles.link}>
          Register
        </Link>
      </View>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  Links: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  link: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginTop: 20,
  },
});
