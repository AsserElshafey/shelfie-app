import ThemedView from "./ThemedView";
import ThemedText from "./ThemedText";
import { StyleSheet, ActivityIndicator, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedLoader = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <ThemedView style={styles.container}>
      <ActivityIndicator size="large" color={theme.text} />
      <ThemedText>Loading...</ThemedText>
    </ThemedView>
  );
};

export default ThemedLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
