import { StyleSheet, Pressable, Text } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../../constants/Colors";

// themed components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";

const Login = () => {
  const handleSubmit = () => {
    console.log("Login submitted");
  };
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Login To Your Account</ThemedText>
      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Submit</Text>
      </ThemedButton>
      <Link href="/register" style={styles.link}>
        Register
      </Link>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  link: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginTop: 20,
  },
});
