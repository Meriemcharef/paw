// Importe React et useState depuis la bibliothèque react.
import React, { useState } from 'react';

// Définit le composant Edittodoform.
export const Edittodoform = ({ editTodo, task }) => {
  // Utilise le hook useState pour gérer l'état du champ de formulaire avec la valeur initiale de la tâche existante.
  const [value, setValue] = useState(task.task);

  // Fonction qui gère la soumission du formulaire d'édition.
  const handleSubmit = e => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page).
    
    // Appelle la fonction editTodo avec la nouvelle valeur et l'identifiant du todo.
    editTodo(value, task.id);
    
    // Réinitialise la valeur du champ de formulaire à une chaîne vide.
    setValue("");
  };

  // Rendu du composant formulaire d'édition.
  return (
    // Formulaire avec la classe 'TodoForm' et gestionnaire de soumission 'handleSubmit'.
    <form className='TodoForm' onSubmit={handleSubmit}>
      {/* Champ de texte de saisie avec la classe 'todo-input', la valeur contrôlée par l'état 'value',
      et un gestionnaire de changement 'onChange' pour mettre à jour la valeur. */}
      <input
        type='text'
        className='todo-input'
        value={value}
        placeholder='Update'
        onChange={(e) => setValue(e.target.value)}
      />
      
      {/* Bouton de soumission du formulaire avec la classe 'todo-btn'. */}
      <button type='submit' className='todo-btn'>
        Edit Task
      </button>
    </form>
  );
};

