import React from 'react';
import GestionTaches from '../components/GestionTaches'; // Assurez-vous d'ajuster le chemin d'importation en fonction de votre structure de fichiers
import GestionTachesReligieuses from '../components/Religion';
import "./all.module.css";

// Composant principal pour la page "All"
const All = () => {
  return (
    <div className='page'>
      <div className="gestion-taches-container">
        <GestionTaches />
        <GestionTachesReligieuses />
      </div>
    </div>
  );
};

export default All;
