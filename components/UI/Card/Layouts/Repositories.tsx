import React from "react";
import { Typography, Box } from "@mui/material";
import TypographyLink from "../Typography/TypographyLink";
import { Repository } from "../../../../services/graphql/types";

type Props = {
  item: Repository;
};

const Repositories = ({ item }: Props) => {
  if (!item) return null;
  return (
    <Box>
      <TypographyLink id={item.id} name={item.name} />
      <Typography variant="h6">{item.description}</Typography>
      <Typography variant="h6">{item.updatedAt}</Typography>
      <Typography variant="h6">{item.stargazerCount}</Typography>
      <Typography variant="h6">{item.primaryLanguage?.name}</Typography>
    </Box>
  );
};

export default Repositories;
