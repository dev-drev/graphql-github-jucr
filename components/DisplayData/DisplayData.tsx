import React from "react";
import { Box } from "@mui/material";
import { DocumentNode, useQuery } from "@apollo/client";
import ItemsContainer from "../UI/ItemsContainer";
import { CircularProgress } from "@mui/material";
import Topic from "../UI/ItemsContainer/Layouts/Topic";

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

  const topic = data?.["topic"];
  console.log(topic);

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
            return (
              <ItemsContainer
                topic={topic}
                section={section}
                key={item.id}
                item={item}
              />
            );
          })}
      {topic && <Topic topic={topic} />}
    </Box>
  );
}
