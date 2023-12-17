import { Text, View } from "react-native";
import { styles } from "./style";

interface Props {
  text: string;
  value: number;
  color: string
}
export function Badge({ text, value, color }: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, color === 'blue' ? styles.textBlue : styles.textPurple]}>{text}</Text>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}
