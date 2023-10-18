import { useState } from "react";

export default function Task(props) {
  const task = props.task;

  // State for editing mode
  const [isEditing, setIsEditing] = useState(false);
  // State for the editable task value
  const [editedValue, setEditedValue] = useState(task.title);

  function handleDelete() {
    props.remove(task);
  }

  function handleStatusChange() {
    props.toggleCompleted(task);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    props.updateTaskTitle(task.id, editedValue);
    setIsEditing(false);
  }

  function handleValueChange(e) {
    setEditedValue(e.target.value);
  }

  return (
    <li className="list">
      <div className="task-list">
        <div className="task-left">
          <input
            type="checkbox"
            onChange={handleStatusChange}
            checked={task.completed}
          />
          {isEditing ? (
            <input
              type="text"
              value={editedValue}
              onChange={handleValueChange}
            />
          ) : (
            <span>
              {task.completed === true ? <del>{editedValue}</del> : editedValue}
            </span>
          )}
        </div>
        <div className="task-right">
          {isEditing ? (
            <button onClick={handleSave} className="save-button">
              Save
            </button>
          ) : (
            <button onClick={handleEdit} className="edit-button">
              Edit
            </button>
          )}
          <button onClick={handleDelete} className="remove-button">
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}
