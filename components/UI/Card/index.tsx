import React from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Users from "./Layouts/Users";
import Repositories from "./Layouts/Repositories";
import TypographyLink from "./Typography/TypographyLink";
type Props = {
  item: any;
  type: string;
};

const Card = ({ item, type }: Props) => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          border: "1px solid green",
          padding: 2,
          textAlign: "start",
          color: "white",
        }}
      >
        <Repositories item={item} />
      </Box>
    </div>
  );
};

export default Card;
