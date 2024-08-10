import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SectionList,
} from "react-native";

export default function HomeScreen({ navigation, todos, setTodos }) {
  const currentTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);

  const completedSections = [
    { title: "Completed Todos", data: completedTodos },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { todo: item, setTodos })}
      style={styles.item}
    >
      <Text style={styles.todotitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Todos</Text>
      <FlatList
        style={styles.todolist}
        data={currentTodos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

      {completedTodos.length > 0 && (
        <SectionList
          sections={completedSections}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() =>
                navigation.navigate("Details", { todo: item, setTodos })
              }
            >
              <Text style={styles.todoTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    margin: 10,
  },
  todoTitle: {
    margin: 10,
    textDecorationLine: "line-through",
  },
});
