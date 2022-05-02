const SearchFilter = ({ searchHanlder }) => {
  return (
    <div>
      <label htmlFor="search">filter shown with </label>
      <input autoFocus type="text" id="search" onChange={searchHanlder} />
    </div>
  );
};

export default SearchFilter;
