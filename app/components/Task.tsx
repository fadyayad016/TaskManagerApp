import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Define the 'type' for a single task object
export type TaskType = {
  id: string;
  text: string;
  completed: boolean;
};

// Define the 'type' for the props of the Task component
type TaskProps = {
  task: TaskType;
  onToggleComplete: () => void;
  onDelete: () => void;
};

// This is a component for a single task item
const Task = ({ task, onToggleComplete, onDelete }: TaskProps) => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={onToggleComplete} style={styles.task}>
        <View style={styles.taskMarker}>
          {task.completed && <Text style={styles.taskMarkerCompleted}>✓</Text>}
        </View>
        <Text style={[styles.taskText, task.completed && styles.taskTextCompleted]}>
          {task.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Task;

// --- STYLES ---
// These styles are only for this component
const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
      },
      task: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
      },
      taskMarker: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#007bff',
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      taskMarkerCompleted: {
        color: '#007bff',
        fontSize: 14,
        fontWeight: 'bold',
      },
      taskText: {
        fontSize: 16,
        color: '#333',
        flex: 1,
      },
      taskTextCompleted: {
        textDecorationLine: 'line-through',
        color: '#aaa',
      },
      deleteButton: {
        backgroundColor: '#dc3545',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
      },
      deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
});
