import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Box, ButtonGroup, Button } from "@mui/material";
import { useQuery } from "@apollo/client";
import theme from "../../services/theme";
import { GET_REPOSITORIES, GET_USERS } from "../../services/graphql/queries";
import AppButton from "../UI/AppButton/AppButton";

export default function Menu({ setType }) {
  return (
    <ButtonGroup
      sx={{
        width: "30%",
        border: "1px solid yellow",
        padding: 5,
        textAlign: "start",
        color: "white",
      }}
      orientation="vertical"
      aria-label="vertical outlined button group"
    >
      <Button onClick={() => setType(GET_REPOSITORIES)}>Repositories</Button>
      <Button>Code</Button>
      <Button>Commits</Button>
      <Button>Issues</Button>
      <Button>Discussion</Button>
      <Button>Packages</Button>
      <Button>MarketPlace</Button>
      <Button>Wikis</Button>
      <Button onClick={() => setType(GET_USERS)}>Users</Button>
    </ButtonGroup>
  );
}
