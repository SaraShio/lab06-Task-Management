import { useState } from "react";
import { nanoid } from "nanoid";

export default function Form(props) {
  const [task, setTask] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  function handleTaskChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      title: task,
      completed: false,
      id: nanoid()
    };
    props.addTask(newTask);
    setTask("");
    setShowOverlay(false);
  }

  return (
    <div className="addTask">
      {showOverlay ? (
        <div className="overlay">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add new task..."
              onChange={handleTaskChange}
              value={task}
            />
            <button type="submit" className="submit-button">
              Add
            </button>
            <button
              type="button"
              onClick={() => setShowOverlay(false)}
              className="cancel-button"
            >
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setShowOverlay(true)}
          className="add-task-button"
        >
          Add Task
        </button>
      )}
    </div>
  );
}
