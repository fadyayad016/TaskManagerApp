import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';

import Task, { TaskType } from '../components/Task';

export default function TaskScreen() {
  // State to hold the list of tasks. We tell useState it will be an array of TaskType objects.
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: '1', text: 'Learn React Native', completed: false },
    { id: '2', text: 'Build a Task Manager App', completed: true },
  ]);

  // State to hold the text from the input field
  const [taskText, setTaskText] = useState('');

  // Function to add a new task
  const handleAddTask = () => {
    if (taskText.trim().length === 0) {
      return; // Don't add empty tasks
    }
    const newTask: TaskType = {
      id: Date.now().toString(), // Use timestamp for a unique ID
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskText(''); // Clear the input field
    Keyboard.dismiss(); // Close the keyboard
  };

  // Function to toggle a task's completed status
  const handleToggleComplete = (id: string) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task
  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>My Tasks</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a new task..."
            value={taskText}
            onChangeText={setTaskText}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task
              task={item}
              onToggleComplete={() => handleToggleComplete(item.id)}
              onDelete={() => handleDeleteTask(item.id)}
            />
          )}
          keyExtractor={item => item.id}
          style={styles.list}
        />

      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

// --- STYLES ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  list: {
    flex: 1,
  },
});
