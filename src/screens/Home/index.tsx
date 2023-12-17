import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style";
import logo from "../../../assets/logo.png";
import { useState } from "react";
import { EmptyList } from "../../components/EmptyList";
import { Badge } from "../../components/Badge";
import { Task } from "../../components/Task";
type Tasks = {
  id: number;
  task: string;
  concluded: boolean;
};

export function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Tasks[]>([]);

  function handleAddTask() {
    if (!task) return;
    const newTask = {
      id: Math.random(),
      task,
      concluded: false,
    };
    setTasks((prevState) => [...prevState, newTask]);
    setTask("");
  }

  function handleRemoveTask(id: number) {
    const item = tasks.find((task) => task.id === id);
    return Alert.alert("Remover", `Deseja remover a tarefa ${item?.task}?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasks((prevState) => prevState.filter((task) => task.id !== id));
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleConcludeTask(id: number) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, concluded: !task.concluded } : task
      )
    );
  }

  function getConcludedTasks() {
    const concludedTasks = tasks.filter((task) => task.concluded);
    return concludedTasks.length;
  }

  function getTotalTasks() {
    return tasks.length;
  }

  return (
    <>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.listContainer}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setTask}
            value={task}
          ></TextInput>
          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <AntDesign name="pluscircleo" size={17} color="#F2F2F2" />
          </TouchableOpacity>
        </View>

        <View style={styles.badgeContainer}>
          <Badge text="Criadas" value={getTotalTasks()} color="blue" />
          <Badge text="Concluídas" value={getConcludedTasks()} color="purple" />
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={tasks}
          renderItem={({ item }) => (
            <Task
              task={item.task}
              concluded={item.concluded}
              key={item.id}
              onRemove={() => handleRemoveTask(item.id)}
              onConclude={() => handleConcludeTask(item.id)}
            />
          )}
          ListEmptyComponent={() => <EmptyList />}
        />
      </View>
    </>
  );
}
