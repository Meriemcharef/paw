import React from 'react';
import GestionTaches from '../components/GestionTaches'; // Assurez-vous d'ajuster le chemin d'importation en fonction de votre structure de fichiers
import "./all.module.css";

// Composant principal pour la page "All"
const Mesachats = () => {
  return (
    <div className='page'>
      <div className="gestion-taches-container">
        <GestionTaches />
        
      </div>
    </div>
  );
};

export default Mesachats;
