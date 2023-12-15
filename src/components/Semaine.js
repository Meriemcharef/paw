import React, { useState } from 'react';
import { startOfWeek, addDays, format } from 'date-fns';
import './semaine.css';

const Semaine = ({ date }) => {
  const debutSemaine = startOfWeek(date);
  const [taches, setTaches] = useState(Array.from({ length: 7 }, () => []));
  const [nouvelleTache, setNouvelleTache] = useState('');
  const [tacheEnEdition, setTacheEnEdition] = useState({ jourIndex: null, tacheIndex: null });
  const [textesEdites, setTextesEdites] = useState(Array.from({ length: 7 }, () => []));

  const ajouterTache = (jourIndex) => {
    if (nouvelleTache.trim() !== '') {
      const nouvellesTaches = [...taches];
      nouvellesTaches[jourIndex].push({ text: nouvelleTache });
      setTaches(nouvellesTaches);
      setNouvelleTache('');
      setTextesEdites(Array.from({ length: 7 }, () => [])); // Réinitialise les textes édités
    }
  };

  const editerTache = (jourIndex, tacheIndex, nouvelleTache) => {
    const nouvellesTaches = [...taches];
    nouvellesTaches[jourIndex][tacheIndex] = { text: nouvelleTache };
    setTaches(nouvellesTaches);
    annulerEdition();
  };

  const annulerEdition = () => {
    setTacheEnEdition({ jourIndex: null, tacheIndex: null });
  };

  const supprimerTache = (jourIndex, tacheIndex) => {
    const nouvellesTaches = [...taches];
    nouvellesTaches[jourIndex].splice(tacheIndex, 1);
    setTaches(nouvellesTaches);
  };

  const joursSemaine = Array.from({ length: 7 }, (_, jourIndex) => {
    const jour = addDays(debutSemaine, jourIndex);
    const formattedJour = format(jour, 'yyyyMMdd');

    return (
      <div key={jourIndex} className="jour-agenda">
        <div className="jour-nom">{format(jour, 'EEEE')}</div>
        <div className="jour-date">{format(jour, 'dd/MM')}</div>
        <ul className="taches-du-jour">
          {taches[jourIndex].map((tache, tacheIndex) => (
            <li key={tacheIndex}>
              {tacheEnEdition.jourIndex === jourIndex && tacheEnEdition.tacheIndex === tacheIndex ? (
                <>
                  <input
                    type="text"
                    value={textesEdites[jourIndex][tacheIndex] !== undefined ? textesEdites[jourIndex][tacheIndex] : tache.text}
                    onChange={(e) => {
                      const newTextesEdites = [...textesEdites];
                      newTextesEdites[jourIndex][tacheIndex] = e.target.value;
                      setTextesEdites(newTextesEdites);
                    }}
                  />
                  <button onClick={annulerEdition}>
                    Annuler
                  </button>
                  <button onClick={() => editerTache(jourIndex, tacheIndex, textesEdites[jourIndex][tacheIndex])}>
                    OK
                  </button>
                </>
              ) : (
                <>
                  {tache.text}
                  <button onClick={() => setTacheEnEdition({ jourIndex, tacheIndex })}>
                    Editer
                  </button>
                  <button onClick={() => supprimerTache(jourIndex, tacheIndex)}>
                    Supprimer
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            value={nouvelleTache}
            onChange={(e) => setNouvelleTache(e.target.value)}
          />
          <button onClick={() => ajouterTache(jourIndex)}>Ajouter une tâche</button>
        </div>
      </div>
    );
  });

  return <div className="agenda-semaine">{joursSemaine}</div>;
};

export default Semaine;
