import React from "react";
import { Box } from "@mui/material";
import { DocumentNode, useQuery } from "@apollo/client";
import Card from "../UI/Card";
import { CircularProgress } from "@mui/material";
import { GET_ORGANIZATION, GET_USERS } from "../../services/graphql/queries";
import useGetFullUsers from "../../services/hooks/useGetFullUsers";

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
  console.log(data);
  const loadingIndicator = () => {
    return (
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
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflow: "scroll",
      }}
    >
      {error && <p>{error.message}</p>}
      {loading
        ? loadingIndicator()
        : data?.search?.nodes?.map((item) => {
            return <Card section={section} key={item.id} item={item} />;
          })}
    </Box>
  );
}
