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
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";

const Login = () => {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const { user, login } = useUser();

  const handleSubmit = async () => {
    setError(null);
    try {
      await login(authData.email, authData.password);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Login To Your Account</ThemedText>
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
          <Text style={{ color: "#f2f2f2", textAlign: "center" }}>Login</Text>
        </ThemedButton>
        {error && <ThemedText style={styles.error}>{error}</ThemedText>}
        <ThemedText>
          Don't have an account?{" "}
          <Link href="/register" style={styles.link}>
            Register
          </Link>
        </ThemedText>
      </ThemedView>
    </TouchableWithoutFeedback>
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
