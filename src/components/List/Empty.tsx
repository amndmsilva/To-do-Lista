import { ClipboardText } from "phosphor-react";

import styles from "./Empty.module.css";

export default function Empty() {
  return (
    <div className={styles.emptyContainer}>
      <span>
        {" "}
        <ClipboardText size={60} color="#323238" weight="light" />
      </span>
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
