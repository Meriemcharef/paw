// // Importe React depuis la bibliothèque react.
// import React from 'react';

// // Importe le composant FontAwesomeIcon depuis la bibliothèque '@fortawesome/react-fontawesome'.
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// // Importe les icônes spécifiques de Font Awesome depuis la bibliothèque '@fortawesome/free-regular-svg-icons' et '@fortawesome/free-solid-svg-icons'.
// import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';

// // Définit le composant Todo.
// export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
//   return (
//     // Div principale avec la classe 'Todo'.
//     <div className='Todo'>
//       {/* Paragraphe avec la tâche du todo, et une classe 'completed' si le todo est marqué comme complété. */}
//       <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ''}`}>
//         {task.task}
//       </p>
      
//       {/* Div contenant des icônes pour l'édition et la suppression du todo. */}
//       <div>
//         {/* Icône pour l'édition du todo, avec un gestionnaire de clic 'onClick' qui appelle la fonction 'editTodo'. */}
//         <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />

//         {/* Icône pour la suppression du todo, avec un gestionnaire de clic 'onClick' qui appelle la fonction 'deleteTodo'. */}
//         <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
//       </div>
//     {/* Fin de la div principale. */}
//     </div>
//   );
// };