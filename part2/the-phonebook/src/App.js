import { useState } from "react";
import SearchFilter from "./components/SearchFilter";
import AddNewPeople from "./components/AddNewPeople";
import PersonsDataDisplayer from "./components/PersonsDataDisplayer";

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

  // it is used to check if the name is already taken
  const isTaken = (name) => {
    return persons.some((person) => person.name === name);
  };

  // searchHanlder function works together with the search filter
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

  // this manages the conditional rendering of the data on each render cicle
  const personsDataConditional = findPersons === null ? persons : findPersons;

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchFilter searchHanlder={searchHanlder} />
      <h2>add a new</h2>
      <AddNewPeople
        newName={newName}
        newPhoneNumber={newPhoneNumber}
        submitHandler={submitHandler}
        inputNameHandler={inputNameHandler}
        inputPhoneNumberHandler={inputPhoneNumberHandler}
      />
      <h2>Numbers</h2>
      <PersonsDataDisplayer personsDataConditional={personsDataConditional} />
    </div>
  );
};

export default App;
