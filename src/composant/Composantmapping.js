// ComposantAvecMapping.js
import React from 'react';
// mise ne place d'un objet avec plusieur ligne et colonnes
const ComposantAvecMapping = () => {
  const dataList = [
    { id: 1, text: 'Premier élément' },
    { id: 2, text: 'Deuxième élément' },
    { id: 3, text: 'Troisième élément' },
  ];

  return (
    //affichage tablaeu et le tableau est parcouru grace a map
    <div>
        <h1>Exo 30 mapping</h1>
    <ul>
      {dataList.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
    </div>
  );
};

export default ComposantAvecMapping;
