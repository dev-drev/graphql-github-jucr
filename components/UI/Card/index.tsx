import React from "react";
import { Box } from "@mui/material";
import Repositories from "./Layouts/Repositories";
import { QueryType, Repository } from "../../../services/graphql/types";
type Props = {
  item: Repository;
  section: QueryType;
};

const Card = ({ item }: Props) => (
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
);


export default Card;
