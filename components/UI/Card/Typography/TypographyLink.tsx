import Link from "next/link";
import React from "react";
import { Typography } from "@mui/material";
import theme from "../../../../services/theme";

type Props = { id: string; name: string; owner: { login: string } };

const TypographyLink = ({ id, name, owner }: Props) => {
  return (
    <Link href={`/display/${id}`}>
      <Typography variant="h6" sx={{ color: theme.palette.primary.light }}>
        {owner ? `${owner.login} + /` : ""}
        {name}
      </Typography>
    </Link>
  );
};

export default TypographyLink;
