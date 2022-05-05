import { useState, useEffect } from "react";
import axios from "axios";
import crud from "./services/crud";
import SearchFilter from "./components/SearchFilter";
import AddNewPeople from "./components/AddNewPeople";
import PersonsDataDisplayer from "./components/PersonsDataDisplayer";

const App = () => {
  const [persons, setPersons] = useState(null);
  const [findPersons, setFindPersons] = useState(null);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  useEffect(() => {
    crud.getAll().then((response) => setPersons(response.data));
  }, [persons]);

  const submitHandler = (e) => {
    e.preventDefault();
    const person = findPerson(newName);
    // to prevent adding empty fileds
    if (newName === "" || newPhoneNumber === "") {
      alert("Please fill in all fields");
      return;
    }

    if (isTaken(newName)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        crud.updatePersonNumber(person.id, {
          ...person,
          number: newPhoneNumber,
        });
      }
      reset();
    } else {
      crud.createPerson({ name: newName, number: newPhoneNumber });
      setPersons([...persons, { name: newName, number: newPhoneNumber }]);
      reset();
    }
  };

  const reset = () => {
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
  const isTaken = (name) => persons.some((person) => person.name === name);

  const findPerson = (name) => persons.find((person) => person.name === name);

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
      {/* wait until the data is ready --- initial state is null */}
      {persons && (
        <PersonsDataDisplayer
          persons={persons}
          setPersons={setPersons}
          personsDataConditional={personsDataConditional}
        />
      )}
    </div>
  );
};

export default App;
