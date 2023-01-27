import React from "react";
import { Typography, Box } from "@mui/material";
import Link from "next/link";
import TypographyLink from "../Typography/TypographyLink";

type Props = {
  item: {
    id: string;
    name: string;
    description: string;
    updatedAt: string;
    stargazerCount: number;
  };
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
