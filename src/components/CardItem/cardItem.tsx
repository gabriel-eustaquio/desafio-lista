'use client';
import styles from "@/components/CardItem/styles.module.scss";
import { Task } from "../Card/card";
import Image from "next/image";

type CardProps = {
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
  tasksChecked: Task[],
  setTasksChecked: React.Dispatch<React.SetStateAction<Task[]>>,
  id: number,
  setId: React.Dispatch<React.SetStateAction<number>>,
  setModalDelete: React.Dispatch<React.SetStateAction<boolean>>,
  setTaskToDelete: React.Dispatch<React.SetStateAction<string>>,
}

export default function CardItem({tasks, setTasks, tasksChecked, setTasksChecked, id, setId, setModalDelete, setTaskToDelete}: CardProps) {

  function moveToChecked(taskText: string) {
    setId(id + 1);
    setTasksChecked([...tasksChecked, { text: taskText, id }]);
    setTasks(tasks.filter(task => task.text !== taskText));
  }

  function moveToTasks(taskText: string) {
    setId(id + 1);
    setTasks([...tasks, { text: taskText, id }]);
    setTasksChecked(tasksChecked.filter(task => task.text !== taskText));
  }

  const handleDeleteClick = (taskText: string) => {
    setTaskToDelete(taskText);
    setModalDelete(true);
  };

  return (
    <>
      <div>
        <h2>Suas tarefas de hoje</h2>
        <ul className={styles.cardItem}>
          {tasks.map((task) => {
            if (task.text) {
              return (
                <li key={`${task.text}${task.id}`}>
                  <input 
                    type="checkbox" 
                    id={`${task.text}${id}`} 
                    onChange={() => moveToChecked(task.text)} 
                  />
                  <label htmlFor={`${task.text}${id}`} onClick={() => moveToChecked(task.text)}>
                    {task.text}
                  </label>
                  <div onClick={() => handleDeleteClick(task.text)} onTouchEnd={() => handleDeleteClick(task.text)}>
                    <Image src="/imagens/binpoint.svg" width={24} height={24} alt="Logo" priority />
                  </div>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
      <div>
        <h2>Tarefas finalizadas</h2>
        <ul className={styles.cardItem}>
          {tasksChecked.map((task) => {
            if (task.text) {
              return (
                <li key={`${task.text}${task.id}`}>
                  <input 
                    type="checkbox" 
                    id={`${task.text}${id}`} 
                    defaultChecked 
                    onChange={() => moveToTasks(task.text)} 
                  />
                  <label className={styles.tasksChecked} htmlFor={`${task.text}${id}`} onClick={() => moveToTasks(task.text)}>
                    {task.text}
                  </label>
                  <div onClick={() => handleDeleteClick(task.text)} onTouchEnd={() => handleDeleteClick(task.text)}>
                    <Image src="/imagens/binpoint.svg" width={24} height={24} alt="Logo" priority />
                  </div>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </>
  );
}
