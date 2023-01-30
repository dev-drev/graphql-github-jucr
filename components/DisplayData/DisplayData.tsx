import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { DocumentNode, useQuery } from "@apollo/client";
import Layout from "../UI/Layouts";
import Topic from "../UI/Layouts/LayoutTypes/Topic";

// This is the main component that renders the data, it accepts a query and a section in order to render the data according to the section

type DisplayDataProps = {
  query: string;
  section: DocumentNode;
};

export default function DisplayData({ query, section }: DisplayDataProps) {
  // Get the data from the query
  const { data, loading, error } = useQuery(section, {
    variables: {
      query: query,
    },
  });
  const topic = data?.["topic"];
  // create a loading indicator
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
  // Render the data according to the section
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
              <Layout
                topic={topic}
                section={section}
                key={item.id}
                item={item}
              />
            );
          })}
      {/* Since the topic is only one we have a separate component for it  */}
      {topic && <Topic topic={topic} />}
    </Box>
  );
}
