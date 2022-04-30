import { useEffect, useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  // useEffect(() => {
  //   if (newName !== "") {
  //     setPersons([...persons, newName]);
  //     setNewName("");
  //   }
  // }, [newName]);

  const submitHandler = (e) => {
    e.preventDefault();
    setPersons([...persons, { name: newName }]);
    setNewName("");
  };

  const inputHandler = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitHandler}>
        <div>
          name: <input onChange={inputHandler} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <p key={person.name}>{person.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
