import { FormControl, TextField } from "@mui/material";
import React from "react";
import theme from "../../services/theme";

type InputProps = {
  query: string;
  setQuery: (query: string) => void;
};

const SearchBar = ({ query, setQuery }: InputProps) => {
  return (
    <FormControl
      sx={{
        pb: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextField
        inputProps={{ style: { color: theme.palette.grey.white80 } }}
        sx={{
          borderRadius: "5px",
          width: "100%",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: theme.palette.grey.grey80,
              borderWidth: "0.5px",
            },
            "&:hover fieldset": {
              borderColor: theme.palette.grey.grey80,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.grey.grey80,
            },
          },
        }}
        id="outlined-basic"
        variant="outlined"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </FormControl>
  );
};

export default SearchBar;
