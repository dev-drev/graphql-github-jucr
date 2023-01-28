import React from "react";

import { Box, ButtonGroup, Button } from "@mui/material";
import { useQuery } from "@apollo/client";
import theme from "../../services/theme";
import { GET_REPOSITORIES, GET_USERS } from "../../services/graphql/queries";
import Link from "next/link";
import Card from "../UI/Card";

export default function DisplayData({ query, type }) {
  type = GET_REPOSITORIES;
  query = query || "hello";
  const { data } = useQuery(GET_REPOSITORIES, {
    variables: {
      query: query,
    },
  });

  return (
    <Box
      sx={{
        width: "70%",
        border: "1px solid red",
      }}
    >
      {data?.search?.nodes?.map((item) => {
        return <Card type="GET_REPOSITORIES" item={item} />;
      })}
    </Box>
  );
}
