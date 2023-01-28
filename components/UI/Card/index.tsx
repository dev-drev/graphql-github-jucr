import React from "react";
import { Box } from "@mui/material";
import Repositories from "./Layouts/Repositories";
import { QueryType, Repository } from "../../../services/graphql/types";
import theme from "../../../services/theme";
type Props = {
  item: Repository;
  section: QueryType;
};

const Card = ({ item }: Props) => (
  <Box
    sx={{
      width: "100%",

      borderBottom: `1px solid ${theme.palette.grey.grey80}`,
      p: 1,
      textAlign: "start",
      color: "white",
    }}
  >
    <Repositories item={item} />
  </Box>
);


export default Card;
