import React, { useState } from 'react';
import styles from './gestiontache.module.css';

const TacheTableRow = ({ nom, propositions, onAjouterProposition, onPropositionCocheChange }) => {
  const [nouvelleProposition, setNouvelleProposition] = useState('');

  const handleAjouterProposition = () => {
    if (nouvelleProposition.trim() !== '') {
      onAjouterProposition(nouvelleProposition);
      setNouvelleProposition('');
    }
  };

  let icone;
  switch (nom.toLowerCase()) {
    case 'acheter des légumes et fruits':
      icone = '🥦🍇';
      break;
    case 'produits ménagers':
      icone = '🧼🧽';
      break;
    case 'mes achats':
      icone = '🛒';
      break;
    default:
      icone = '❓';
  }

  return (
    <tr>
      <td>
        <span role="img" aria-label="Courses">
          {icone}
        </span>{" "}
        {nom}
      </td>
      <td>
        {propositions.map((proposition, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <input
              type="checkbox"
              checked={proposition.coche}
              onChange={() => onPropositionCocheChange(index, !proposition.coche)}
            />
            <span style={{ marginLeft: '8px' }}>{proposition.nom}</span>
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
          <input
            type="text"
            placeholder="Choses à Acheter"
            value={nouvelleProposition}
            onChange={(e) => setNouvelleProposition(e.target.value)}
          />
          <button onClick={handleAjouterProposition}>Ajouter</button>
        </div>
      </td>
    </tr>
  );
};

const TacheTable = ({ taches, onAjouterProposition, onPropositionCocheChange }) => (
  <table>
    <thead>
      <tr>
        <th>Catégories</th>
        <th>Ma liste d'achats</th>
      </tr>
    </thead>
    <tbody>
      {taches.map((tache, index) => (
        <TacheTableRow
          key={index}
          {...tache}
          onAjouterProposition={(nouvelleProposition) => onAjouterProposition(index, nouvelleProposition)}
          onPropositionCocheChange={(propIndex, value) => onPropositionCocheChange(index, propIndex, value)}
        />
      ))}
    </tbody>
  </table>
);

const GestionTaches = () => {
  const [taches, setTaches] = useState([
    { nom: 'Acheter des légumes et fruits', propositions: [] },
    { nom: 'Produits ménagers', propositions: [] },
    { nom: 'Mes achats', propositions: [] },
  ]);

  const handleAjouterProposition = (index, nouvelleProposition) => {
    const nouvellesTaches = [...taches];
    nouvellesTaches[index].propositions.push({ nom: nouvelleProposition, coche: false });
    setTaches(nouvellesTaches);
  };

  const handlePropositionCocheChange = (tacheIndex, propIndex, value) => {
    const nouvellesTaches = [...taches];
    nouvellesTaches[tacheIndex].propositions[propIndex].coche = value;
    setTaches(nouvellesTaches);
  };

  return (
    <div className="container">
      <h1 className="titre-principal">Mes achats</h1>
      <TacheTable
        taches={taches}
        onAjouterProposition={handleAjouterProposition}
        onPropositionCocheChange={handlePropositionCocheChange}
      />
    </div>
  );
};

export default GestionTaches;
