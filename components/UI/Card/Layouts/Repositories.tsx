import React from "react";
import { Typography, Box } from "@mui/material";
import Link from "next/link";
import TypographyLink from "../Typography/TypographyLink";
import { Repository } from "../../../../services/types/types";

type Props = {
  item: Repository;
};
const Repositories = ({ item }: Props) => {
  console.log(item);
  return (
    <Box>
      <TypographyLink id={item.id} name={item.name} />
      <Typography variant="h6">{item.description}</Typography>
      <Typography variant="h6">{item.updatedAt}</Typography>
      <Typography variant="h6">{item.stargazerCount}</Typography>
    </Box>
  );
};

export default Repositories;
