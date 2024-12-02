import { useState } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import "./styles.css";

export default function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text,cabinet) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        cabinet:cabinet,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <>
      <h1>Список задач</h1>
      <AddTask onAddTask={handleAddTask} />
      
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
        
    </>
  );
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Mazda',cabinet: '401B', done: true},
  {id: 1, text: 'BMB',cabinet: '302A', done: false},
  {id: 2, text: 'Changan',cabinet: '204B',done: false},
];
