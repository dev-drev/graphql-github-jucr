import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Issue } from "../../../../services/graphql/types";
import formatDate from "../../../../services/helpers/formatDate";
import theme from "../../../../services/theme";
import TypographyLink from "../../Atoms/Typography/TypographyLink";

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
        <Link href={`details/${item.id}`}>{item.title}</Link>
      </Typography>
      <Typography noWrap variant="caption">
        {item.body}
      </Typography>
      <Box>
        <TypographyLink
          small
          id={item.id}
          owner={item.author}
          color={theme.palette.grey.grey}
        />
        <Typography
          noWrap
          variant="caption"
          sx={{ px: 1, color: theme.palette.grey.grey }}
        >
          opened {formatDate(item.updatedAt, true)} days ago
        </Typography>
      </Box>
    </Box>
  );
};

export default Issues;
