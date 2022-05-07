const SuccessMessage = ({ personName }) => {
  return (
    <div className="success-message">
      {" "}
      <i>{personName}</i> was added{" "}
    </div>
  );
};

export default SuccessMessage;
