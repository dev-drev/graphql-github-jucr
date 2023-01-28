import React from "react";
import { Typography, Box } from "@mui/material";
import TypographyLink from "../Typography/TypographyLink";
import { Repository } from "../../../../services/graphql/types";
let moment = require("moment"); // require

type Props = {
  item: Repository;
};

const Repositories = ({ item }: Props) => {
  let date = moment(item.updatedAt).format("MMMM Do YYYY");
  console.log("item", item);
  if (!item) return null;
  return (
    <Box>
      <TypographyLink id={item.id} name={item.name} owner={item.owner} />
      <Typography variant="caption">{item.description}</Typography>
      <Box sx={{ display: "flex", gap: 1, py: 0.5 }}>
        {item.primaryLanguage?.name && (
          <Typography variant="caption">
            {item.primaryLanguage?.name}
          </Typography>
        )}
        <Typography variant="caption">Updated on {date}</Typography>
        <Typography variant="caption">{item.stargazerCount}</Typography>
      </Box>
    </Box>
  );
};

export default Repositories;
