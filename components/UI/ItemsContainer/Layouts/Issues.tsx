import { Box, Typography } from "@mui/material";
import React from "react";
import { Issue } from "../../../../services/graphql/types";
import theme from "../../../../services/theme";
import TypographyLink from "../Typography/TypographyLink";

type Props = {
  item: Issue;
};

const Issues = ({ item }: Props) => {
  return (
    <Box sx={{ gap: 0.5, display: "flex", flexDirection: "column" }}>
      <TypographyLink
        id={item.id}
        name={item.title}
        owner={item.repository.owner}
        small
        color={theme.palette.grey.grey}
      />
      <Typography sx={{ color: theme.palette.primary.light }}>
        {item.title}
      </Typography>
      <Typography noWrap variant="caption">
        {item.body}
      </Typography>
      <TypographyLink
        small
        id={item.id}
        owner={item.author}
        color={theme.palette.grey.grey}
      />
    </Box>
  );
};

export default Issues;