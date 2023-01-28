import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Box, ButtonGroup, Button } from "@mui/material";
import { useQuery } from "@apollo/client";
import theme from "../../services/theme";
import { GET_REPOSITORIES, GET_USERS } from "../../services/graphql/queries";

export default function Menu({ type, query, setType }) {
  query = query || "react";
  const { data } = useQuery(GET_REPOSITORIES, {
    variables: {
      query: query,
    },
  });
  console.log(data);
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
      <Button>Repositories</Button>
      <Button>Code</Button>
      <Button>Commits</Button>
      <Button>Issues</Button>
      <Button>Discussion</Button>
      <Button>Packages</Button>
      <Button>MarketPlace</Button>
      <Button>Wikis</Button>
      <Button>Users</Button>
    </ButtonGroup>
  );
}
