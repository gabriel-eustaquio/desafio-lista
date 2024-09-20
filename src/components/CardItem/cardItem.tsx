'use client'
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

  function removeIdTasksChecked(e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) {
    setTasksChecked(tasksChecked.filter((task) => task.text != e.currentTarget.innerText));
    setId(id + 1);
    setTasks([...tasks, {text: e.currentTarget.innerText, id}]);
  }

  function addToTasksChecked(e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) {
    setId(id + 1);
    setTasksChecked([...tasksChecked, {text: e.currentTarget.innerText.replace("Apagar", " ").trim(), id}])
    setTasks(tasks.filter(task => task.text != e.currentTarget.innerText.replace("Apagar", " ").trim()))
  }

  return (
    <>
      <div>
        <h2>Suas tarefas de hoje</h2>
        <ul className={`${styles.cardItem}`}>
          {tasks.map((task) => {
            if (task.text) {
              return <li key={`task${task.text + task.id}`} onClick={addToTasksChecked} onTouchStart={addToTasksChecked}>
                <input type="checkbox" id={`${task.text + id}`} />
                <label htmlFor={`${task.text + id}`}>{task.text}</label>
                <div onClick={(e) => {
                  setTaskToDelete(`${e.currentTarget.previousElementSibling?.innerHTML}`);
                  setModalDelete(true);
                  e.stopPropagation();
                }} onTouchStart={(e) => {
                  setTaskToDelete(`${e.currentTarget.previousElementSibling?.innerHTML}`);
                  setModalDelete(true);
                  e.stopPropagation();
                }}> 
                  <Image src="/imagens/binpoint.svg" width={24} height={24} alt="Logo" priority/>                  
                </div>
                
              </li>
            }
          })}
        </ul>
      </div>
      <div>
        <h2>Tarefas finalizadas</h2>
        <ul className={`${styles.cardItem}`}>
        {tasksChecked.map((task) => {
            if (task.text) {
              return <li key={`task${task.text + task.id}`} onClick={removeIdTasksChecked} onTouchStart={removeIdTasksChecked}>
                <input type="checkbox" id={`${task.text + id}`} defaultChecked/>
                <label className={`${styles.tasksChecked}`} htmlFor={`${task.text + id}`}>{task.text}</label>
                <div onClick={(e) => {
                  setTaskToDelete(`${e.currentTarget.previousElementSibling?.innerHTML}`);
                  setModalDelete(true);                  
                  e.stopPropagation();
                }} onTouchStart={(e) => {
                  setTaskToDelete(`${e.currentTarget.previousElementSibling?.innerHTML}`);
                  setModalDelete(true);                  
                  e.stopPropagation();
                }}>
                  <Image src="/imagens/binpoint.svg" width={24} height={24} alt="Logo" priority/>                  
                </div>
              </li>
            }
          })}
        </ul>
      </div>
    </>
  )
}