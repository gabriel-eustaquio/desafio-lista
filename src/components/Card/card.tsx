'use client';
import styles from "@/components/Card/styles.module.scss";
import Modal from "@/components/Modal/modal";
import React from 'react';
import CardItem from "@/components/CardItem/cardItem";
import ModalDelete from "../Modal/modal-delete";
export type Task = {
  text: string,
  id: number
}

export default function Card() {

  const [modal, setModal] = React.useState(false);
  const [modalDelete, setModalDelete] = React.useState(false);
  const [text, setText] = React.useState("");
  const [id, setId] = React.useState(0);
  const [taskToDelete, setTaskToDelete] = React.useState("");
  const [tasks, setTasks] = React.useState([{text: "Lavar as mãos", id: 0}, {text: "Fazer um bolo", id: 1}, {text: "Lavar a louça", id: 2}]);
  const [tasksChecked, setTasksChecked] = React.useState([{text: "Levar o lixo para fora", id: 3}]);

  
  return (
    <>
      <section className={`${styles.container}`}>
        <div className={`${styles.card}`}>
          <CardItem tasks={tasks} setTasks={setTasks} tasksChecked={tasksChecked} setTasksChecked={setTasksChecked} id={id} setId={setId} setModalDelete={setModalDelete} taskToDelete={taskToDelete} setTaskToDelete={setTaskToDelete}/>
        </div>
        <button className={`${styles.button}`} onClick={() => setModal(true)}>Adicionar nova tarefa</button>
        <Modal modal={modal} setModal={setModal} text={text} setText={setText} tasks={tasks} setTasks={setTasks} id={id} setId={setId} />
        <ModalDelete modalDelete={modalDelete} setModalDelete={setModalDelete} tasks={tasks} setTasks={setTasks} tasksChecked={tasksChecked} setTasksChecked={setTasksChecked} id={id} setId={setId} taskToDelete={taskToDelete} setTaskToDelete={setTaskToDelete}/>
      </section>
    </>
  )
}