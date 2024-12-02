import { useState } from 'react';

export default function AddTask({onAddTask}) {

  
  const [text, setTextOne] = useState(''); 
  const [cabinet, setTextTwo] = useState('');
  return (
    <>
      <input
        class="DescriptionTask"
        placeholder="Описание задачи"
        value={text}
        onChange={(e) =>setTextOne(e.target.value)}
      />

      <input
        class="NumberCabinet"
        placeholder="Номер кабинета"
        value={cabinet}
        onChange={(e) =>setTextTwo(e.target.value)}
      />

      <button
        onClick={() => {
          setTextOne('');
          onAddTask(text,cabinet);  
        }}>
        Добавить
      </button>
    </>
  );
}