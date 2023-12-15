// TaskList.js
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';

import styles from '../components/style.module.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setModalOpen] = useState(false);
  const [taskText, setTaskText] = useState('');
  const [isImportant, setImportant] = useState(false);
  const [taskTime, setTaskTime] = useState('');

  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const cancelTask = () => {
    setTaskText('');
    setImportant(false);
    setTaskTime('');
    closeModal();
  };

  const addTask = () => {
    if (taskText) {
      const newTask = {
        id: new Date().getTime(),
        text: taskText,
        important: isImportant,
        completed: false,
        date: selectedDate, // Use selectedDate directly
        time: taskTime
          ? new Date(
              selectedDate.getFullYear(),
              selectedDate.getMonth(),
              selectedDate.getDate(),
              parseInt(taskTime.split(':')[0], 10),
              parseInt(taskTime.split(':')[1], 10)
            )
          : null,
      };

      if (isImportant) {
        setTasks([...tasks, newTask]);

        if (newTask.time && !newTask.completed) {
          scheduleAlarm(newTask);
        }

        setTaskText('');
        setImportant(false);
        setTaskTime('');

        closeModal();
      } else {
        console.log("La tâche n'est pas importante. Ne sera pas ajoutée.");
      }
    }
  };

  const scheduleAlarm = (task) => {
    const currentTime = new Date();

    if (!task.completed && task.time > currentTime) {
      const timeDifference = task.time - currentTime;

      setTimeout(() => {
        showNotification(task);
      }, timeDifference);
    }
  };

  const showNotification = (task) => {
    if (Notification.permission === 'granted') {
      new Notification('Task Reminder', {
        body: `It's time to "${task.text}"!`,
      });
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={styles.taskListContainer}>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <ul>
        <h3 className={styles.taskListTitle}>Mes taches importantes</h3>
        {tasks.map((task) => (
          <li key={task.id} className={task.important ? styles.reminder : ''}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <span>
              {format(task.date, 'dd/MM/yyyy')} {task.time && format(task.time, 'HH:mm')}
            </span>
            <button onClick={() => toggleCompleted(task.id)}>
              {task.completed ? 'Démarquer' : 'Marquer comme complétée'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <button className={styles.addButton} onClick={openModal}>
        Ajouter une tâche
      </button>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <span onClick={closeModal} className={styles.close}>&times;</span>
            <h2>Nouvelle tâche</h2>
            <label>
              Tâche :
              <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
            </label>
            <label>
              Tâche importante :
              <input
                type="checkbox"
                checked={isImportant}
                onChange={() => setImportant(!isImportant)}
              />
            </label>
            <label>
              Heure (HH:mm) :
              <input
                type="text"
                value={taskTime}
                onChange={(e) => setTaskTime(e.target.value)}
              />
            </label>
            <div>
              <button onClick={addTask}>Ajouter la tâche</button>
              <button onClick={cancelTask }>Annuler</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
