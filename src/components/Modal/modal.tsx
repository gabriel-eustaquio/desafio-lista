'use client';
import styles from "@/components/Modal/styles.module.scss";
import { Task } from "../Card/card";
type ModalProps = {
  modal: boolean,
  setModal: React.Dispatch<React.SetStateAction<boolean>>,
  text: string,
  setText: React.Dispatch<React.SetStateAction<string>>,
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
  id: number,
  setId: React.Dispatch<React.SetStateAction<number>>,
}

export default function Modal({modal, setModal, text, setText, tasks, setTasks, id, setId}: ModalProps) {

  function handleClick(event: React.FormEvent) {
    event.preventDefault();
    setModal(false);

    if (text) {
      setTasks([...tasks, { text, id}])
      setId(id + 1);
      setText("");
    }
    return false;
    
  }

  function handleClickCancel(event: React.FormEvent) {
    event.preventDefault();
    setModal(false);
    
  }


  if (!modal) return false;
  return (
    <div className={`${styles.back}`}>
      <div className={`${styles.modal}`}>
        <h2>Nova tarefa</h2>
        <form>
          <label htmlFor="titulo">Titulo</label>
          <input type="text" name="titulo" id="titulo" placeholder="Digite" value={text} onChange={(e) => {
            setText(e.target.value)
          }} />
          <div className={`${styles.buttons}`}>
            <button className={`${styles.cancel}`} onClick={handleClickCancel} onTouchStart={handleClickCancel}>Cancelar</button>
            <button className={`${styles.submit}`} onClick={handleClick} onTouchStart={handleClick}>Adicionar nova tarefa</button>
          </div>
        </form>
      </div>
    </div>
  )
}