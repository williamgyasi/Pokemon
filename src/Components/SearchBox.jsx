import React from "react";

function SearchBox({ onChange, searchTerm }) {
  return (
    <div
      style={{
        padding: 10,
      }}
    >
      <input
        style={{
          padding: 10,
          borderRadius: 10,
          outline: "none",
          border: "none",
          width: 200,
        }}
        onChange={onChange}
        type={"search"}
        placeholder="Search Pokemon"
      />
    </div>
  );
}

export default SearchBox;
