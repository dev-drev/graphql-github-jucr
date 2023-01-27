import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Box, ButtonGroup, Button } from "@mui/material";
import { useQuery } from "@apollo/client";
import theme from "../../services/theme";
import { GET_REPOSITORIES, GET_USERS } from "../../services/graphql/queries";
import Link from "next/link";
import Card from "../UI/Card";

export default function DisplayData({ query }) {
  query = query || "react";

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
        return <Card item={item} />;
      })}
    </Box>
  );
}
