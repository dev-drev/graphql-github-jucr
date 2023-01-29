import React from "react";
import { Typography, Box, Chip } from "@mui/material";
import TypographyLink from "../Typography/TypographyLink";
import { Repository } from "../../../../services/graphql/types";
import formatDate from "../../../../services/helpers/formatDate";
import theme from "../../../../services/theme";
import StarBorderIcon from "@mui/icons-material/StarBorder";

type Props = {
  item: Repository;
};

const Repositories = ({ item }: Props) => {
  console.log("item", item);

  if (!item) return null;
  return (
    <Box>
      <TypographyLink id={item.id} name={item.name} owner={item.owner} />
      <Typography variant="caption">{item.description}</Typography>
      <Box sx={{ display: "flex", gap: 1, py: 0.5 }}>
        {item.primaryLanguage?.name && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <StarBorderIcon sx={{ fontSize: 14 }} />
            <Typography variant="caption">{item.stargazerCount}</Typography>
          </Box>
        )}
        <Typography variant="caption">{item.primaryLanguage?.name}</Typography>
        <Typography variant="caption">{formatDate(item.updatedAt)}</Typography>
      </Box>
      {/* Chips for related topics */}
      <Box sx={{ gap: 10 }}>
        {item.repositoryTopics?.nodes?.map((topic) => (
          <Chip
            key={topic.topic.name}
            label={topic.topic.name}
            component="a"
            href="#basic-chip"
            sx={{
              color: `${theme.palette.primary.light}`,
              m: 0.5,
              backgroundColor: `${theme.palette.primary.contrastText}`,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Repositories;
