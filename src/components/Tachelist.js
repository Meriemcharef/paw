import React, { useState, useEffect } from 'react';

const TacheList = () => {
  const [taches, setTaches] = useState([]);
  const [nouvelleTache, setNouvelleTache] = useState({
    titre: '',
    description: '',
    difficulte: 'facile',
    heure: '',
    date: new Date(),
    statut: 'todo',
  });
  const [tacheEnEdition, setTacheEnEdition] = useState(null);
  const [erreur, setErreur] = useState('');

  // Charger les tâches sauvegardées au chargement du composant
  useEffect(() => {
    console.log('Loading tasks from localStorage');
    const tachesSauvegardees = JSON.parse(localStorage.getItem('taches'));
    if (tachesSauvegardees) {
      setTaches(tachesSauvegardees);
    }
  }, []);

  // Enregistrer les tâches chaque fois qu'elles sont mises à jour
  useEffect(() => {
    console.log('Saving tasks to localStorage');
    localStorage.setItem('taches', JSON.stringify(taches));
  }, [taches]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNouvelleTache((prevTache) => ({ ...prevTache, [name]: value }));
  };

  const ajouterTache = () => {
    if (!nouvelleTache.titre || !nouvelleTache.description || !nouvelleTache.heure) {
      setErreur('Veuillez compléter tous les champs obligatoires.');
      return;
    }

    setTaches((prevTaches) => [...prevTaches, nouvelleTache]);
    setNouvelleTache({
      titre: '',
      description: '',
      difficulte: 'facile',
      heure: '',
      date: new Date(),
      statut: 'todo',
    });
    setErreur('');
  };

  const editerTache = (index) => {
    setTacheEnEdition(index);
    setNouvelleTache(taches[index]);
  };

  const mettreAJourTache = () => {
    if (!nouvelleTache.titre || !nouvelleTache.description || !nouvelleTache.heure) {
      setErreur('Veuillez compléter tous les champs obligatoires.');
      return;
    }

    const tachesMisesAJour = [...taches];
    tachesMisesAJour[tacheEnEdition] = nouvelleTache;
    setTaches(tachesMisesAJour);
    setTacheEnEdition(null);
    setNouvelleTache({
      titre: '',
      description: '',
      difficulte: 'facile',
      heure: '',
      date: new Date(),
      statut: 'todo',
    });
    setErreur('');
  };

  const supprimerTache = (index) => {
    const tachesMisesAJour = [...taches];
    tachesMisesAJour.splice(index, 1);
    setTaches(tachesMisesAJour);
    setTacheEnEdition(null);
    setNouvelleTache({
      titre: '',
      description: '',
      difficulte: 'facile',
      heure: '',
      date: new Date(),
      statut: 'todo',
    });
    setErreur('');
  };

  return (
    <div className="container">
      <h1>Liste des Tâches</h1>
      {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
      <div>
      <label>Titre :</label>
        <input
          type="text"
          name="titre"
          value={nouvelleTache.titre}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Description :</label>
        <textarea
          name="description"
          value={nouvelleTache.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div>
        <label>Difficulté :</label>
        <select
          name="difficulte"
          value={nouvelleTache.difficulte}
          onChange={handleInputChange}
        >
          <option value="facile">Facile</option>
          <option value="moyen">Moyen</option>
          <option value="difficile">Difficile</option>
        </select>
      </div>
      <div>
        <label>Heure :</label>
        <input
          type="time"
          name="heure"
          value={nouvelleTache.heure}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Niveau de progression :</label>
        <select
          name="statut"
          value={nouvelleTache.statut}
          onChange={handleInputChange}
        >
          <option value="todo">À faire</option>
          <option value="inprogress">En cours</option>
          <option value="done">Terminé</option>
        </select>
      </div>
      {tacheEnEdition === null ? (
        <button onClick={ajouterTache}>Ajouter Tâche</button>
      ) : (
        <button onClick={mettreAJourTache}>Mettre à Jour</button>
      )}
      <ul>
        {taches.map((tache, index) => (
          <li key={index}>
            <h3>{tache.titre}</h3>
            <p>{tache.description}</p>
            <p>Difficulté : {tache.difficulte}</p>
            <p>Heure : {tache.heure}</p>
            <p>Niveau de progression : {tache.statut}</p>
            <div>
              <button onClick={() => editerTache(index)}>Éditer</button>
              <button onClick={() => supprimerTache(index)}>Supprimer</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TacheList;

