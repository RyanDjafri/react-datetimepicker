# react-datetimepicker-custom

## Description

`react-datetimepicker-custom` est un composant React simple et personnalisable pour la sélection de dates. Ce composant utilise `moment` pour gérer et formater les dates, offrant ainsi une interface utilisateur intuitive pour choisir des dates.

## Installation

```bash
npm install react-datetimepicker-custom
```
Utilisez npm pour installer le package :

## Utilisation

Pour utiliser `react-datetimepicker-custom`, importez le composant `DateTimePicker` dans votre application React :

```jsx
import React, { useState } from 'react';
import DateTimePicker from 'react-datetimepicker-custom';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Choisissez une date</h1>
      <DateTimePicker onChange={handleDateChange} value={selectedDate} />
      {selectedDate && <p>Date sélectionnée : {selectedDate.format('DD/MM/YYYY')}</p>}
    </div>
  );
};

export default App;
```

## Props

`onChange`
Type : Function 
Description : Callback appelée lorsque la date sélectionnée change.
`value`
Type : objet moment
Description : La date initiale à afficher dans le composant.

Ce composant permet aux utilisateurs de sélectionner une date à l'aide d'une interface intuitive, tout en offrant la flexibilité de personnaliser son comportement grâce aux props onChange et value.