const RejectMessage = ({ personName }) => {
  return (
    <div className="reject-message">
      Information about <i>{personName}</i> has already removed from server{" "}
    </div>
  );
};

export default RejectMessage;
