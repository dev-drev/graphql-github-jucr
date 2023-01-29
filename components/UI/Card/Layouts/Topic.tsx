import { Box, Typography } from "@mui/material";
import React from "react";
import { Topic } from "../../../../services/graphql/types";

type Props = {
  item: Topic;
};

const Topic = ({ item }: Props) => {
  console.log("item", item);
  return (
    <Box sx={{ color: "white" }}>
      <Typography variant="caption" sx={{ color: "white" }}>
        {item.name}
      </Typography>
    </Box>
  );
};

export default Topic;
