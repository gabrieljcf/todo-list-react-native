import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./style";
type Props = {
  task: string;
  concluded: boolean;
  onRemove: () => void;
  onConclude: () => void;
};

export function Task({ task, concluded, onRemove, onConclude }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={concluded ? styles.concluded : styles.notConcluded}
        onPress={onConclude}
      >
        {concluded && <Feather name="check" size={10} color="#F2F2F2" />}
      </TouchableOpacity>
      <Text style={[concluded ? styles.textConcluded : styles.task]}>
        {task}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Feather name="trash-2" size={17} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
