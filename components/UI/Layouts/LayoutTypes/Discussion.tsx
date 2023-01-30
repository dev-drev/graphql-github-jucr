import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Discussion } from "../../../../services/graphql/types";
import formatDate from "../../../../services/helpers/formatDate";
import theme from "../../../../services/theme";
import TypographyLink from "../../Atoms/Typography/TypographyLink";

type Props = {
  item: Discussion;
};

const Discussion = ({ item }: Props) => {
  return (
    <Box sx={{ gap: 2 }}>
      <TypographyLink
        color={theme.palette.grey.grey}
        small
        owner={item.author}
        name={item.repository.name}
      />
      <Typography
        variant="body1"
        sx={{
          fontStyle: "italic",
          color: theme.palette.primary.light,
          py: 0.5,
        }}
      >
        {item.title}
      </Typography>
      <Typography
        variant="body1"
        noWrap
        sx={{
          color: theme.palette.grey.white90,
          fontSize: 14,
        }}
      >
        {item.body}
      </Typography>
      <Typography
        variant="body1"
        noWrap
        sx={{
          color: theme.palette.grey.grey,
          fontSize: 14,
        }}
      >
        posted {formatDate(item.createdAt, true)} days ago
      </Typography>
    </Box>
  );
};

export default Discussion;
