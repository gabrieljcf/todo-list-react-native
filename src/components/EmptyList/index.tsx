import { Image, Text, View } from "react-native";
import { styles } from "./style";
import emptyListImg from "../../../assets/clipboard.png";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={emptyListImg} style={styles.image}/>
      <Text style={styles.textBold}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
