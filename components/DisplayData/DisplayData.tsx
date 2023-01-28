import React from "react";

import { Box } from "@mui/material";
import { useQuery } from "@apollo/client";
import Card from "../UI/Card";
import { GraphQLObjectType } from "graphql";

export default function DisplayData({ query, section }) {
  const { data } = useQuery(section, {
    variables: {
      query: query,
    },
  });

  console.log(data);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflow: "scroll",
      }}
    >
      {data?.search?.nodes?.map((item) => {
        return <Card section={section} key={item.id} item={item} />;
      })}
    </Box>
  );
}
