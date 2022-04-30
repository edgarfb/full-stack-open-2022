import { useState } from "react";

const data = [
  { name: "Arto Hellas", number: "040-123456", id: 1 },
  { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
];

const App = () => {
  const [persons, setPersons] = useState(data);
  const [findPersons, setFindPersons] = useState(null);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (isTaken(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    // to prevent adding empty fileds
    if (newName === "" || newPhoneNumber === "") {
      alert("Please fill in all fields");
      return;
    }
    setPersons([...persons, { name: newName, number: newPhoneNumber }]);
    setNewName("");
    setNewPhoneNumber("");
  };

  const inputNameHandler = (e) => {
    setNewName(e.target.value);
  };
  const inputPhoneNumberHandler = (e) => {
    setNewPhoneNumber(e.target.value);
  };

  const isTaken = (name) => {
    return persons.some((person) => person.name === name);
  };

  const searchHanlder = (e) => {
    const search = e.target.value.toLowerCase();
    if (search === "") {
      setFindPersons(null);
      return;
    }
    const personsFiltered = persons.filter((person) =>
      person.name.toLowerCase().includes(search)
    );

    setFindPersons(personsFiltered);
  };

  const displayNumbers = findPersons === null ? persons : findPersons;

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <label htmlFor="search">filter shown with </label>
        <input type="text" id="search" onChange={searchHanlder} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={submitHandler}>
        <div>
          name: <input onChange={inputNameHandler} value={newName} />
        </div>
        <div>
          number:{" "}
          <input onChange={inputPhoneNumberHandler} value={newPhoneNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {displayNumbers.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}{" "}
        </p>
      ))}
    </div>
  );
};

export default App;
