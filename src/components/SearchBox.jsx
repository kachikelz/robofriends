import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa3  b--green  ">
      <input
        type="search"
        name=""
        id=""
        placeholder="search"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
