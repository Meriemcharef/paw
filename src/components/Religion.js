import React, { useState } from 'react';
import styles from "./religion.css"

const TacheReligieuseTable = ({ taches, onCocheChange }) => {
  const categories = Array.from(new Set(taches.map((tache) => tache.categorie)));

  return (
    <table>
      <thead>
        <tr>
          <th>Catégorie</th>
          <th>Nom</th>
          <th>Effectuée</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((categorie, index) => {
          const tachesDeLaCategorie = taches.filter((tache) => tache.categorie === categorie);
          return (
            <React.Fragment key={index}>
              {tachesDeLaCategorie.map((tache, index) => (
                <tr key={index}>
                  {index === 0 && (
                    <td rowSpan={tachesDeLaCategorie.length}>{categorie}</td>
                  )}
                  <td>{tache.nom}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={tache.coche}
                      onChange={() => onCocheChange(tache.index, !tache.coche)}
                    />
                  </td>
                </tr>
              ))}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

const GestionTachesReligieuses = () => {
  const [tachesReligieuses, setTachesReligieuses] = useState([
    { nom: 'صلاة الصبح', categorie: 'الصلاة', coche: false, index: 0 },
    { nom: 'صلاة الظهر', categorie: 'الصلاة', coche: false, index: 1 },
    { nom: 'صلاة العصر', categorie: 'الصلاة', coche: false, index: 2 },
    { nom: 'صلاة المغرب', categorie: 'الصلاة', coche: false, index: 3 },
    { nom: 'صلاة العشاء', categorie: 'الصلاة', coche: false, index: 4 },
    { nom: 'الدعاء', categorie: 'الأدعية و الأذكار', coche: false, index: 5 },
    { nom: 'أذكار الصباح', categorie: 'الأدعية و الأذكار', coche: false, index: 6 },
    { nom: ' أذكار المساء', categorie: 'الأدعية و الأذكار', coche: false, index: 7 },
    { nom: 'أذكار النوم', categorie: 'الأدعية و الأذكار', coche: false, index: 8 },
    { nom: 'قراءة القران', categorie: 'قران', coche: false, index: 9},
  ]);

  const handleCocheChange = (index, value) => {
    const nouvellesTaches = [...tachesReligieuses];
    nouvellesTaches[index].coche = value;
    setTachesReligieuses(nouvellesTaches);
  };

  return (
    <div>
      <h1 className="titre-religieux">Mes Tâches Religieuses</h1>
      <TacheReligieuseTable
        taches={tachesReligieuses}
        onCocheChange={handleCocheChange}
      />
    </div>
  );
};

export default GestionTachesReligieuses;
