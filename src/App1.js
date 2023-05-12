import React from 'react';

const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

const getFullName = (item) => {
  return [item.firstname,item.lastname].join(" ");
}

const PersonList = () => {
  return (
    <div>
      {persons.map((person, index) => (
        <div key={index}>{getFullName(person)}</div>
      ))}
    </div>
  );
}

export default PersonList;
