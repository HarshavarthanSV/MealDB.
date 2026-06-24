function SearchBar({ search, setSearch }) {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <input
        type="text"
        placeholder="Search Dish (e.g. Idly)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "20px"
        }}
      />
    </div>
  );
}

export default SearchBar;