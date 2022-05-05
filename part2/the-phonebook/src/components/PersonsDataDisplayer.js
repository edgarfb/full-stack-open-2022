import crud from "../services/crud";

const PersonsDataDisplayer = ({
  personsDataConditional,
  persons,
  setPersons,
}) => {
  const newPersons = (id) =>
    persons.filter((person) => person.id !== personsDataConditional.id);

  return (
    <div>
      {personsDataConditional.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}{" "}
          <button
            onClick={() => {
              const isConfirmed = window.confirm(`Delete ${person.name} ?`);
              if (isConfirmed) {
                crud.deletePerson(person.id);
                setPersons(newPersons(person.id));
                console.log("confirmed");
              } else {
                console.log("Canceled");
              }
            }}
          >
            delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default PersonsDataDisplayer;
