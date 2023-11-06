/* eslint-disable react/prop-types */

import { useState } from "react";

const PersonForm = ({newName,handleInput,handlePhone,newPhone, persons, setPersons, setNewName, setNewPhone}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const setName = newName;
    const setPhone = newPhone;
    const obj = {
      name: setName,
      number: setPhone,
    };

    var nameExist = false;

    for (const key in persons) {
      if (persons[key].name === setName) {
        nameExist = true;
        alert("ALREADY EXIST");
      }
    }

    if (!nameExist) {
      setPersons(persons.concat(obj));
    }

    setNewName("");
    setNewPhone("");
    console.log(persons);
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleInput} type="text" />
        </div>
        <div>
          Phone No:{" "}
          <input value={newPhone} onChange={handlePhone} type="text" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Filtered = ({newSearch, persons}) => {
  const filteredSearch = newSearch ? persons.filter((person) => person.name.toLowerCase().includes(newSearch.toLowerCase())) : persons

  return (
    <div>
      {filteredSearch.map((person, i) => {
        return (
          <div key={i}>
            <h6>
              {person.name}: {person.number}
            </h6>
          </div>
        );
      })}
    </div>
  )
}

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newSearch, setNewSearch] = useState("");

  

  const handleInput = (e) => {
    setNewName(e.target.value);
  };
  const handlePhone = (e) => {
    setNewPhone(e.target.value);
  };

  const handleSearch = (e) => {
    setNewSearch(e.target.value);
  };



  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter Search Input:{" "}
        <input value={newSearch} onChange={handleSearch} type="text" />
      </div>

      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setNewName={setNewName}
        setNewPhone={setNewPhone}
        newName = {newName}
        handleInput = {handleInput}
        newPhone = {newPhone}
        handlePhone = {handlePhone}
        
      />
      
      <h2>Numbers</h2>

      <Filtered 
        newSearch={newSearch}
        persons={persons}
      />
    </div>
  );
};

export default App;
