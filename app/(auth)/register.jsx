import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

// themed components
import ThemedButton from "../../components/ThemedButton";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";

const Register = () => {
  const handleSubmit = () => {
    console.log("Register submitted");
  };
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Create A New Account</ThemedText>
      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Submit</Text>
      </ThemedButton>
      <Link href="/login" style={styles.link}>
        Login
      </Link>
    </ThemedView>
  );
};

export default Register;

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
