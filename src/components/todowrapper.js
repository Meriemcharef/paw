// Importe React et useState depuis la bibliothèque react.
import React, { useState } from 'react';

// Importe le composant Todoform depuis le fichier 'todoform.js'.
import { Todoform } from './todoform';

// Importe la fonction uuidv4 depuis la bibliothèque 'uuid'.
import { v4 as uuidv4 } from 'uuid';

// Importe le composant Todo depuis le fichier 'todo.js'.
import { Todo } from './todo';

// Importe le composant Edittodoform depuis le fichier 'edittodoform.js'.
// cette fonction est utilisee pour generer des identifiants unique pour chaque elemenet de la to do list
import { Edittodoform } from './edittodoform';

// Initialise un identifiant unique avec la fonction uuidv4. 
uuidv4();

// Définit le composant Todowrapper.
export const Todowrapper = () => {
  // Utilise le hook useState pour gérer l'état des todos.
  const [todos, setTodos] = useState([]);

  // Fonction pour ajouter un nouveau todo à la liste.
  const addTodo = todo => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      }
    ]);
    console.log(todos);
  };

  // Fonction pour basculer l'état de complétion d'un todo.
  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Fonction pour supprimer un todo.
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Fonction pour activer/désactiver le mode d'édition d'un todo.
  const editTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // Fonction pour éditer la tâche d'un todo.
  const editTask = (task, id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // Rendu du composant Todowrapper.
  return (
    <div className='TodoWrapper'>
      {/* Titre */}
      <h1>MyPlanner</h1>

      {/* Composant Todoform pour ajouter de nouveaux todos */}
      <Todoform addTodo={addTodo} />

      {/* Mapping à travers les todos et rendu de chaque todo ou du formulaire d'édition en fonction de l'état d'édition. */}
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <Edittodoform editTodo={editTask} task={todo} key={index} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
export default Todowrapper;
