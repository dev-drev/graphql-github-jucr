import React from "react";
import { Typography, Box } from "@mui/material";
import { User } from "../../../../services/graphql/types";
import TypographyLink from "../Typography/TypographyLink";

type Props = {
  item: User;
};

const Users = ({ item }: Props) => {
  console.log("item", item);
  if (!item) return null;
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <TypographyLink id={item.id} name={item.name} />
        <Typography>{item.login}</Typography>
      </Box>
      <Typography variant="caption">{item.location}</Typography>
      <Box sx={{ display: "flex", gap: 1, py: 0.5 }}>
        <Typography variant="caption">{item.bio}</Typography>
      </Box>
    </Box>
  );
};

export default Users;
