import { StyleSheet, Text } from "react-native";
import { useUser } from "../../hooks/useUser";

import ThemedButton from "../../components/ThemedButton";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";

const Profile = () => {
  const { logout, user } = useUser();
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.heading}>
        {user?.email}
      </ThemedText>

      <ThemedText>Time to start reading some books...</ThemedText>
      <ThemedButton onPress={logout} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </ThemedButton>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    backgroundColor: "red",
    padding: 18,
    borderRadius: 6,
    marginVertical: 10,
    width: "80%",
    marginBottom: 20,
  },
  buttonText: {
    color: "#f2f2f2",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
