import { useState } from "react";
import Header from "./components/Header";
import InputNewTask from "./components/InputNewTask";
import ListHeader from "./components/List/ListHeader";
import { Item } from "./components/List/Item";
import Empty from "./components/List/Empty";
import styles from "./App.module.css";
import "./global.css";

import { PlusCircle } from "phosphor-react";
import { ButtonCreate } from "./components/ButtonCreate";

export interface Task {
  id: number;
  text: string;
  isComplete: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState("");

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isComplete) {
      return prevValue + 1;
    }

    return prevValue;
  }, 0);

  function handleAddTask() {
    if (!inputValue) {
      return;
    }

    const newTask: Task = {
      id: new Date().getTime(),
      text: inputValue,
      isComplete: false,
    };

    setTasks((state) => [...state, newTask]);
    setInputValue("");
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    if (!confirm("Deseja mesmo apagar essa tarefa?")) {
      return;
    }

    setTasks(filteredTasks);
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  }

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <InputNewTask
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <ButtonCreate onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </ButtonCreate>
        </div>

        <div className={styles.tasksList}>
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  data={task}
                  toggleTaskStatus={handleToggleTask}
                  removeTask={handleRemoveTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
