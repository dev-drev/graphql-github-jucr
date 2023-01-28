import { FormControl } from "@mui/material";
import React from "react";

type InputProps = {
  query: string;
  setQuery: (query: string) => void;
};

const SearchBar = ({ query, setQuery }: InputProps) => {
  return (
    <FormControl
      sx={{
        width: "10%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </FormControl>
  );
};

export default SearchBar;
