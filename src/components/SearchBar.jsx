import '../App.css';

function SearchBar( {onFilter} ) {

  const handleSearch = (e) => {
    onFilter(e.target.value);
  };

  return (
    <>
      <h2>Search</h2>
      <div className="boxes">
        <input
          className="search"
          type="text"
          placeholder="Start typing here..."
          onChange={handleSearch}
        />
      </div>
    </>
  );
}

export default SearchBar;