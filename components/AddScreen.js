import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function AddScreen({ route, navigation }) {
  const { setTodos } = route.params;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    if (title.trim() === "" || description.trim() === "") {
      alert("Please enter both a title and a description.");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title,
      description,
      isDone: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Add a New Todo</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter todo title"
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter todo description"
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.cancelButton}
      >
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    justifyContent: "center",
  },
  label: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  cancelButton: {
    marginTop: 16,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "red",
    fontSize: 18,
  },
});
