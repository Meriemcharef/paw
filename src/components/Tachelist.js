import React, { useState, useEffect } from 'react';
const TacheList = () => {
  const [showForm, setShowForm] = useState(false);
  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };
  const [items,setItems]=useState('');
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
  const [inputData,setInputData]=useState('');

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
  if(!nouvelleTache.titre || !nouvelleTache.description || !nouvelleTache.heure){
    setErreur('Veuillez compléter tous les champs obligatoires.');
  
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
    <div className="container p-10 m-10">
      <h1>Liste des Tâches</h1>
      {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
      <div className='form-container p-0 m-10'>
      <button  className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-700" onClick={toggleFormVisibility}>Add&EditForm</button>
        

      {showForm && (
        <div className='form flex content-center'>
      <div className="titre" >
      <label htmlFor="titre" >Titre :</label>
       <input 
        class="form-control"  
          type="text"
          name="titre"
          value={nouvelleTache.titre}
          onChange={handleInputChange}
        />
      </div>
      <div className='description'>
        <label htmlFor="description">Description :</label>
        <textarea
          name="description"
          value={nouvelleTache.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className='difficulte'>
        <label htmlFor='difficulte'>Difficulté :</label>
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
      <div className='time'>
        <label htmlFor='heure'>Heure :</label>
        <input
          type="time"
          name="heure"
          value={nouvelleTache.heure}
          onChange={handleInputChange}
        />
      </div>
      <div className='progression'>
        <label htmlFor='progression'>Niveau de progression :</label>
        <select
          name="progression"
          value={nouvelleTache.statut}
          onChange={handleInputChange}
        >
          <option value="todo">À faire</option>
          <option value="inprogress">En cours</option>
          <option value="done">Terminé</option>
        </select>
      </div>
      {tacheEnEdition === null ? (
                <button  className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-700" onClick={ajouterTache}>sauvegardées</button>
              ) : (
                <button  className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-700" onClick={mettreAJourTache}>Mettre à Jour</button>
              )}
      
      </div>)}
   
        
        <table className="table-auto border border-purple-600">
          <thead>
            <tr className="bg-purple-100">
              <th className="border border-purple-400 px-2 py-2">Task Title</th>
              <th className="border border-purple-400 px-2 py-2">Task Description</th>
              <th className="border border-purple-400 px-2 py-2">Task Progress</th>
              <th className="border border-purple-400 px-2 py-2">Task Level</th>
              <th className="border border-purple-400 px-2 py-2">Task time</th>
              <th className="border border-purple-400 px-2 py-2">Task Edit</th>
              <th className="border border-purple-400 px-2 py-2">Task Delete</th>

            </tr>
          </thead>
          <tbody>
            {taches.map((tache, index) => (
              <tr key={tache.index}>
                <td className="border border-purple-400 px-2 py-2">{tache.titre}</td>
                <td className="border border-purple-400 px-2 py-2">{tache.description}</td>
                <td className="border border-purple-400 px-2 py-2">{tache.statut}</td>
                <td className="border border-purple-400 px-2 py-2">{tache.difficulte}</td>
                  <td className="border border-purple-400 px-2 py-2">{tache.heure}</td>
                <td className="border border-purple-400 px-2 py-2">
                <button onClick={() => editerTache(index)}>Éditer</button></td>
                <td className="border border-purple-400 px-2 py-2">

                <button onClick={() => supprimerTache(index)}>Supprimer</button>
                </td>
            
        
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default TacheList;

