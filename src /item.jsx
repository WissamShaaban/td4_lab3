const TaskItem = ({ task, onDeleteTask }) => {
  return (
    <li className="task-item">
      <span>{task.text}</span>
      <button 
        className="delete-btn" 
        onClick={() => onDeleteTask(task.id)}
      >
        Supprimer
      </button>
    </li>
  );
};

export default TaskItem;
