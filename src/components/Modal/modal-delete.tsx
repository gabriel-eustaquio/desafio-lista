import styles from "@/components/Modal/stylesdelete.module.scss";
import { Task } from "@/components/Card/card";

type ModalDeleteProps = {
  modalDelete: boolean,
  setModalDelete: React.Dispatch<React.SetStateAction<boolean>>,
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
  tasksChecked: Task[],
  setTasksChecked: React.Dispatch<React.SetStateAction<Task[]>>,
  id: number,
  setId: React.Dispatch<React.SetStateAction<number>>,
  taskToDelete: string,
  setTaskToDelete: React.Dispatch<React.SetStateAction<string>>
}

export default function ModalDelete({modalDelete, setModalDelete, tasks, setTasks, tasksChecked, setTasksChecked, taskToDelete}: ModalDeleteProps) {

  if (!modalDelete) return false;
  return (
    <> 
      <div className={`${styles.back}`}>
        <div className={`${styles.modal}`}>
          <h2>Deletar tarefa</h2>
          <p>Tem certeza que você deseja deletar essa tarefa?</p>
          <div className={`${styles.buttons}`}>
            <button className={`${styles.cancel}`} onClick={() => setModalDelete(false)}>Cancelar</button>
            <button className={`${styles.delete}`} onClick={() => {
              setTasksChecked(tasksChecked.filter((task) => task.text != taskToDelete));
              setTasks(tasks.filter((task) => task.text != taskToDelete));
              setModalDelete(false);
            }}>Deletar</button>
          </div>
        </div>
      </div>
    </>
  )
}