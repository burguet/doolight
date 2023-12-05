// ComposantAvecMapping.js
import React from 'react';

const ComposantAvecMapping = () => {
  const dataList = [
    { id: 1, text: 'Premier élément' },
    { id: 2, text: 'Deuxième élément' },
    { id: 3, text: 'Troisième élément' },
  ];

  return (
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
