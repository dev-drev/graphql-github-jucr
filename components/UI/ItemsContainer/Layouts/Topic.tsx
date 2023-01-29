import { Box, Chip, Typography } from "@mui/material";
import React from "react";
import { Topic } from "../../../../services/graphql/types";
import theme from "../../../../services/theme";

type Props = {
  topic: Topic;
};

const Topic = ({ topic }: Props) => {
  console.log("item", topic);
  return (
    <Box sx={{ color: "white" }}>
      <Typography variant="caption">{topic.name}</Typography>
      <Typography variant="caption">{topic.stargazerCount}</Typography>
      {topic.relatedTopics.map((item) => (
        <Chip
          label={item.name}
          sx={{
            color: `${theme.palette.primary.light}`,
            m: 0.5,
            backgroundColor: `${theme.palette.primary.contrastText}`,
          }}
        />
      ))}
    </Box>
  );
};

export default Topic;
