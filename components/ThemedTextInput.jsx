import { TextInput, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedTextInput = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <TextInput
      style={[
        style,
        {
          color: theme.text,
          backgroundColor: theme.uiBackground,
          padding: 20,
          borderRadius: 6,
        },
      ]}
      {...props}
    />
  );
};

export default ThemedTextInput;
