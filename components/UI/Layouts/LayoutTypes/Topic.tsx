import { Box, Chip, Typography } from "@mui/material";
import React from "react";
import { Topic } from "../../../../services/graphql/types";
import theme from "../../../../services/theme";

type Props = {
  topic: Topic;
};

const Topic = ({ topic }: Props) => {
  return (
    <Box sx={{ color: "white" }}>
      <Typography variant="h2" sx={{ textTransform: "capitalize" }}>
        {topic.name}
      </Typography>
      <Typography variant="caption">Likes: {topic.stargazerCount}</Typography>
      <Box>
        Related topics list
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
    </Box>
  );
};

export default Topic;
