import React from "react";
import { Typography, Box } from "@mui/material";
import { User } from "../../../../services/graphql/types";
import Heading from "../../Molecules/Heading/Heading";
import theme from "../../../../services/theme";
import Link from "next/link";

type Props = {
  item: User;
};

const Users = ({ item }: Props) => {
  if (!item) return null;
  return (
    <Box sx={{ py: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Heading id={item.id} name={item.name} imageUrl={item.avatarUrl} />
        <Typography sx={{ color: theme.palette.grey.grey }}>
          <Link href={`details/${item.id}`}>{item.login}</Link>
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
        <Typography variant="caption">{item.location}</Typography>
        <Typography variant="caption">{item.email}</Typography>
      </Box>
    </Box>
  );
};

export default Users;
