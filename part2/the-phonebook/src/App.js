import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phoneNumber: "040-1234567" },
  ]);
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
    setPersons([...persons, { name: newName, phoneNumber: newPhoneNumber }]);
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

  return (
    <div>
      <h2>Phonebook</h2>
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
      <div>
        {persons.map((person) => (
          <p key={person.name}>
            {person.name} {person.phoneNumber}{" "}
          </p>
        ))}
      </div>
      <div>Phone: {newPhoneNumber}</div>
    </div>
  );
};

export default App;
