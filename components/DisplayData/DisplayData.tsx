import React from "react";

import { Box, ButtonGroup, Button } from "@mui/material";
import { useQuery } from "@apollo/client";
import theme from "../../services/theme";
import { GET_REPOSITORIES, GET_USERS } from "../../services/graphql/queries";
import Link from "next/link";
import Card from "../UI/Card";

export default function DisplayData({ query, type }) {

  const { data } = useQuery(type, {
    variables: {
      query: query,
    },
  });

  return (
    <Box
      sx={{
        width: "100%",
        height: "90%",
        overflow: "scroll",
        border: "1px solid red",
      }}
    >
      {data?.search?.nodes?.map((item) => {
        return <Card type={type} item={item} />;
      })}
    </Box>
  );
}
