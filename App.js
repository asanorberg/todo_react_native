import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import DetailScreen from "./components/DetailsScreen";
import AddScreen from "./components/AddScreen";
import { useState } from "react";

const Stack = createNativeStackNavigator();
const initialTodos = [
  {
    id: 1,
    title: "Walk dog",
    description: "Take Bubs for a walk around the block",
    isDone: false,
  },
  {
    id: 2,
    title: "Feed cat",
    description: "Give the cat dry food",
    isDone: false,
  },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#405D72",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          options={({ navigation }) => ({
            title: "My Todos",
            headerRight: () => (
              <Button
                color="white"
                title="+"
                onPress={() => navigation.navigate("Add", { setTodos })}
              />
            ),
          })}
        >
          {(props) => (
            <HomeScreen {...props} todos={todos} setTodos={setTodos} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen
          name="Add"
          options={{ title: "Add Todo" }}
          component={AddScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
