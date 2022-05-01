const PersonsDataDisplayer = ({ personsDataConditional }) => {
  return (
    <div>
      {personsDataConditional.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}{" "}
        </p>
      ))}
    </div>
  );
};

export default PersonsDataDisplayer;
