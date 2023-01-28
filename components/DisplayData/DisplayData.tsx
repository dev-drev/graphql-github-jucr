import React from "react";

import { Box } from "@mui/material";
import { DocumentNode, useQuery } from "@apollo/client";
import Card from "../UI/Card";
import { CircularProgress } from "@mui/material";

type DisplayDataProps = {
  query: string;
  section: DocumentNode;
};

export default function DisplayData({ query, section }: DisplayDataProps) {
  const { data, loading, error } = useQuery(section, {
    variables: {
      query: query,
    },
  });

  console.log(query);

  console.log(data);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflow: "scroll",
      }}
    >
      {loading ? (
        <Box
          sx={{
            color: "white",
            width: "100%",
            height: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={75} />
        </Box>
      ) : (
        data?.search?.nodes?.map((item) => {
          return <Card section={section} key={item.id} item={item} />;
        })
      )}
    </Box>
  );
}
