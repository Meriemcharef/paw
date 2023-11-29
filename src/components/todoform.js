// Importe React et useState depuis la bibliothèque react.
import React, { useState } from 'react';

// Définit le composant Todoform qui prend une prop 'addTodo'.
export const Todoform = ({ addTodo }) => {
  // Utilise le hook useState pour gérer l'état du champ de formulaire.
  const [value, setValue] = useState("");

  // Fonction qui gère la soumission du formulaire.
  const handleSubmit = e => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page).
    
    // Appelle la fonction addTodo avec la valeur actuelle du champ de formulaire.
    addTodo(value);
    
    // Réinitialise la valeur du champ de formulaire à une chaîne vide.
    setValue("");
  };

  // Rendu du composant formulaire.
  return (
    // Formulaire avec la classe 'TodoForm' et gestionnaire de soumission 'handleSubmit'.
    <form className='TodoForm' onSubmit={handleSubmit}>
      {/* Champ de texte de saisie avec la classe 'todo-input', la valeur contrôlée par l'état 'value',
      et un gestionnaire de changement 'onChange' pour mettre à jour la valeur. */}
      <input
        type='text'
        className='todo-input'
        value={value}
        placeholder='What is the task today'
        onChange={(e) => setValue(e.target.value)}
      />
      
      {/* Bouton de soumission du formulaire avec la classe 'todo-btn'. */}
      <button type='submit' className='todo-btn'>
        Add Task
      </button>
    </form>
  );
};