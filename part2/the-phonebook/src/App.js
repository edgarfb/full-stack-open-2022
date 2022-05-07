import { useState, useEffect } from "react";
import axios from "axios";
import crud from "./services/crud";
import SearchFilter from "./components/SearchFilter";
import AddNewPeople from "./components/AddNewPeople";
import PersonsDataDisplayer from "./components/PersonsDataDisplayer";
import SuccessMessage from "./components/SuccessMessage";
import RejectMessage from "./components/RejectMessage";

const App = () => {
  const [persons, setPersons] = useState(null);
  const [findPersons, setFindPersons] = useState(null);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [rejectMessage, setRejectMessage] = useState("");

  useEffect(() => {
    crud.getAll().then((response) => setPersons(response.data));
  }, [setPersons]);

  const submitHandler = (e) => {
    e.preventDefault();
    const person = findPerson(newName);
    // to prevent adding empty fileds
    if (newName === "" || newPhoneNumber === "") {
      alert("Please fill in all fields");
      return;
    }

    if (isTaken(newName)) {
      const confirm = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );
      if (confirm) {
        crud
          .updatePersonNumber(person.id, {
            ...person,
            number: newPhoneNumber,
          })
          // This will update the person in the state
          .then((res) => {
            crud.getAll().then((response) => setPersons(response.data));
          })
          .catch((err) => {
            console.log("Error from catch", err);
            setRejectMessage(newName);
            setTimeout(() => {
              crud.getAll().then((response) => setPersons(response.data));
              setRejectMessage("");
            }, 2000);
          });
      }
      reset();
    } else {
      crud
        .createPerson({ name: newName, number: newPhoneNumber })
        .then((res) => {
          setSuccessMessage(res.data.name);
          setTimeout(() => {
            setSuccessMessage("");
            crud.getAll().then((response) => setPersons(response.data));
          }, 3000);
          return res;
        });
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
      {successMessage !== "" && <SuccessMessage personName={successMessage} />}
      {rejectMessage && <RejectMessage personName={rejectMessage} />}
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
