/* eslint-disable react/prop-types */
import axios from "axios";
import personService from "./services/personService";

import { useEffect, useState } from "react";

const PersonForm = ({
  newName,
  handleInput,
  handlePhone,
  newPhone,
  persons,
  setPersons,
  setNewName,
  setNewPhone,
}) => {
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

      if (persons[key].number === setNewPhone) {
        
      }
    }

    if (!nameExist) {
      setPersons(persons.concat(obj));
    }

    setNewName("");
    setNewPhone("");
    console.log(persons);
    axios.post("http://localhost:3001/persons", obj).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleInput} type="text" />
      </div>
      <div>
        Phone No: <input value={newPhone} onChange={handlePhone} type="text" />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const Filtered = ({ newSearch, persons, setPersons }) => {
  const filteredSearch = newSearch
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(newSearch.toLowerCase())
      )
    : persons;

  const onDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete");

    if (confirm) {
      axios.delete(`http://localhost:3001/persons/${id}`).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
        console.log("deleted");
      })

      .catch((error) => {
        console.log('Deletion Failed ', error)
      })
    }
  };

  return (
    <div>
      {filteredSearch.map((person, i) => {
        return (
          <div key={i}>
            <h6>
              {person.name}: {person.number}
            </h6>
            <button onClick={() => onDelete(person.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    personService.getAll().then((initialNote) => {
      setPersons(initialNote);
    });
  }, []);

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
        newName={newName}
        handleInput={handleInput}
        newPhone={newPhone}
        handlePhone={handlePhone}
      />

      <h2>Numbers</h2>

      <Filtered
        newSearch={newSearch}
        persons={persons}
        setPersons={setPersons}
      />
    </div>
  );
};

export default App;
