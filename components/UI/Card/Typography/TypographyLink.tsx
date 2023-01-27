import Link from "next/link";
import React from "react";
import { Typography } from "@mui/material";

type Props = { id: string; name: string };

const TypographyLink = ({ id, name }: Props) => {
  return (
    <Link href={`/display/${id}`}>
      <Typography variant="h4">{name}</Typography>
    </Link>
  );
};

export default TypographyLink;
