import React from "react";
import { Typography, Box } from "@mui/material";
import { User } from "../../../../services/graphql/types";
import TypographyLink from "../Typography/TypographyLink";
import theme from "../../../../services/theme";

type Props = {
  item: User;
};

const Users = ({ item }: Props) => {
  if (!item) return null;
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <TypographyLink id={item.id} name={item.name} />
        <Typography sx={{ color: theme.palette.grey.grey }}>
          {item.login}
        </Typography>
      </Box>
      <Typography variant="caption">{item.bio}</Typography>

      <Box
        sx={{
          display: "flex",
          gap: 1,
          py: 0.5,
          color: theme.palette.grey.grey,
        }}
      >
        {" "}
        <Typography variant="caption">{item.location}</Typography>
        <Typography variant="caption">{item.email}</Typography>
      </Box>
    </Box>
  );
};

export default Users;
