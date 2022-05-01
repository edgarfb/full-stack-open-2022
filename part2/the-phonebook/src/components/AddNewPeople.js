const AddNewPeople = ({
  newName,
  newPhoneNumber,
  submitHandler,
  inputNameHandler,
  inputPhoneNumberHandler,
}) => {
  return (
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
  );
};

export default AddNewPeople;
