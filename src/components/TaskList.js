import { useState } from "react";
import Task from "./Task";
import Form from "./Form";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks((prevTasks) => [...prevTasks, task]);
  }

  function removeTask(taskToRemove) {
    setTasks(tasks.filter((task) => task.id !== taskToRemove.id));
  }

  function toggleCompleted(taskToToggle) {
    setTasks(
      tasks.map((task) =>
        task.id === taskToToggle.id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function updateTaskTitle(taskId, newTitle) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      )
    );
  }

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            remove={removeTask}
            toggleCompleted={toggleCompleted}
            updateTaskTitle={updateTaskTitle}
          />
        ))}
      </ul>
      <Form addTask={addTask} />
    </div>
  );
}
