import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { Link } from "expo-router";

// themed components
import ThemedButton from "../../components/ThemedButton";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedTextInput from "../../components/ThemedTextInput";

const Register = () => {
  const { register } = useUser();
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setError(null);
    try {
      await register(authData.email, authData.password);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Create A New Account</ThemedText>
        <ThemedText style={styles.subtitle}>Enter your email</ThemedText>
        <ThemedTextInput
          placeholder="Email"
          style={{ width: "80%", marginBottom: 20 }}
          keyboardType="email-address"
          value={authData.email}
          onChangeText={(email) => setAuthData({ ...authData, email })}
        />
        <ThemedText style={styles.subtitle}>Enter your password</ThemedText>
        <ThemedTextInput
          placeholder="Password"
          style={{ width: "80%", marginBottom: 20 }}
          secureTextEntry
          value={authData.password}
          onChangeText={(password) => setAuthData({ ...authData, password })}
        />
        <ThemedButton
          onPress={handleSubmit}
          style={{ width: "80%", marginBottom: 20 }}
        >
          <Text style={{ color: "#f2f2f2", textAlign: "center" }}>
            Register
          </Text>
        </ThemedButton>
        {error && <ThemedText style={styles.error}>{error}</ThemedText>}
        <ThemedText>
          Already have an account?{" "}
          <Link href="/login" style={styles.link}>
            Login
          </Link>
        </ThemedText>
      </ThemedView>
    </TouchableWithoutFeedback>
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
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 4,
    width: "80%",
    textAlign: "start",
  },
  link: {
    color: "#6849a7",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  error: {
    color: "#ff0000",
    textAlign: "center",
    marginBottom: 20,
  },
});
