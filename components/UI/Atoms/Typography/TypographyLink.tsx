import Link from "next/link";
import React from "react";
import { Typography } from "@mui/material";
import theme from "../../../../services/theme";


// This is a component that is used in many places in the app. It is a link that is styled like a typography component. It can be customized to fit the needs of the component that is using it by passing in props.

type Props = {
  name?: string;
  id?: string;
  owner?: { login: string };
  small?: boolean;
  color?: string;
};

const TypographyLink = ({ id, name, owner, small, color }: Props) => {
  return (
    <Link href={`details/${id}`}>
      <Typography
        variant={small ? "caption" : "body1"}
        sx={{ color: color || theme.palette.primary.light }}
      >
        {owner ? `${owner.login}/` : undefined}
        {name}
      </Typography>
    </Link>
  );
};

export default TypographyLink;
