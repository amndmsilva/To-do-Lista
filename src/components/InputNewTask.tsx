import styles from "./InputNewTask.module.css";

export default function InputNewTask({
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <div className={styles.inputContainer}>
      <input type="text" placeholder="Adicione uma nova tarefa" {...rest} />
    </div>
  );
}
