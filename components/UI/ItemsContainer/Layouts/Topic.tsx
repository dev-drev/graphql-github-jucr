import { Box, Typography } from "@mui/material";
import React from "react";
import { Topic } from "../../../../services/graphql/types";

type Props = {
  topic: Topic;
};

const Topic = ({ topic }: Props) => {
  console.log("item", topic);
  return (
    <Box sx={{ color: "white" }}>
      <Typography variant="caption">{topic.name}</Typography>
      <Typography variant="caption">{topic.stargazerCount}</Typography>
    </Box>
  );
};

export default Topic;
