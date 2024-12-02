import { useState } from 'react';
import "./styles.css";


export default function TaskList({tasks, onChangeTask, onDeleteTask}) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({task, onChange, onDelete}) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <tr>
          <td><div>Описание задачи:</div></td>
          <td>
            <input
              value={task.text}
              onChange={(e) => {
                onChange({
                  ...task,
                  text: e.target.value,
                });
              }}
            />
          </td>
          <td><div>Номер кабиента:</div></td>
          <td>
            <input
              value={task.cabinet}
              onChange={(e) => {
                onChange({
                  ...task,
                  cabinet: e.target.value,
                });
              }}
            />
            </td>
          <td><button class="SaveButton" onClick={() => setIsEditing(false)}>Сохранить</button></td>
      </tr>
    );
  } else {
    taskContent = (
      <tr>
        <td><div>Описание задачи: {task.text}</div></td>
        <td><div>Номер кабиента: {task.cabinet}</div></td>
        
        <td><button class="DeleteButton" >Выполнить</button></td>
        <td><button class="EditButton" onClick={() => setIsEditing(true)}>Редактировать</button></td>
        <td><button class="DeleteButton" onClick={() => onDelete(task.id)}>Удалить</button></td>
      </tr>
    );
  }
  return (
    <table>
      {taskContent}
    </table>
  );
}