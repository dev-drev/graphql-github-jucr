import React from "react";
import { Typography, Box } from "@mui/material";
import TypographyLink from "../Typography/TypographyLink";
import { Repository } from "../../../../services/graphql/types";
import TypographyDate from "../Typography/TypographyDate";

type Props = {
  item: Repository;
};

const Repositories = ({ item }: Props) => {
  console.log("item", item);
  if (!item) return null;
  return (
    <Box>
      <TypographyLink id={item.id} name={item.name} owner={item.owner} />
      <Typography variant="caption">{item.description}</Typography>
      <Box sx={{ display: "flex", gap: 1, py: 0.5 }}>
        {item.primaryLanguage?.name && (
          <Typography variant="caption">
            {item.primaryLanguage?.name}
          </Typography>
        )}
        <Typography variant="caption">{item.stargazerCount}</Typography>
        <TypographyDate date={item.updatedAt} />
      </Box>
    </Box>
  );
};

export default Repositories;
