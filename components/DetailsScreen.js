import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default function DetailScreen({ route, navigation }) {
  const { todo, setTodos } = route.params;

  const handleComplete = () => {
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === todo.id ? { ...t, isDone: true } : t))
    );
    navigation.goBack();
  };

  const handleUndo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === todo.id ? { ...t, isDone: false } : t))
    );
    navigation.goBack();
  };

  const handleDelete = () => {
    Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.todotitle}>{todo.title}</Text>
      <Text style={styles.description}>{todo.description}</Text>
      <Button
        title={todo.isDone ? "Undo" : "Complete"}
        onPress={todo.isDone ? handleUndo : handleComplete}
      />
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
  },
  todotitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
