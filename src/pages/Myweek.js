import React from 'react'
import Semaine from '../components/Semaine';
const Myweek = () => {
  const dateDuJour = new Date();
  const taches = [
    { text: 'Tâche 1', date: new Date() },
    { text: 'Tâche 2', date: new Date(dateDuJour.getFullYear(), dateDuJour.getMonth(), dateDuJour.getDate() + 1) },
  ];

  console.log('Tâches:', taches);

  return (
    <div className="App">
      <Semaine date={dateDuJour} taches={taches} />
      {/* Ajoutez ici le reste de votre application */}
    </div>
  )
}

export default Myweek
