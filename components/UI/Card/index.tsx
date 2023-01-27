import React from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Users from "./Layouts/Users";
import Repositories from "./Layouts/Repositories";
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
        <Box
          sx={{
            width: "100%",
            padding: 2,
            textAlign: "start",
            color: "white",
          }}
        >
          {item.nameWithOwner}
        </Box>
        <Link href={`/display/${item.nameWithOwner}`}>Go</Link>
      </Box>
      <Repositories item={item} />
    </div>
  );
};

export default Card;
