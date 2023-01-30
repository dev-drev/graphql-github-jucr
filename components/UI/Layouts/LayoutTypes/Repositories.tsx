import React from "react";
import { Typography, Box, Chip } from "@mui/material";
import { Repository } from "../../../../services/graphql/types";
import formatDate from "../../../../services/helpers/formatDate";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import Heading from "../../Molecules/Heading/Heading";
import theme from "../../../../services/theme";
//Since the layout might me different accordingly to the subject, this is the layout for the repositories card.
//I usually code with an Atomic Design approach and I would nest more molecules components (like the custom Heading one).

type Props = {
  item: Repository;
};

const Repositories = ({ item }: Props) => {
  if (!item) return null;
  return (
    <Box>
      <Heading
        id={item.id}
        name={item.name}
        owner={item.owner}
        icon={
          <FilePresentIcon
            sx={{ color: theme.palette.grey.grey80, fontSize: 20 }}
          />
        }
      />
      <Typography variant="caption">{item.description}</Typography>
      <Box sx={{ display: "flex", gap: 1, py: 0.5 }}>
        {item.primaryLanguage?.name && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <StarBorderIcon sx={{ fontSize: 14 }} />
            <Typography variant="caption">{item.stargazerCount}</Typography>
          </Box>
        )}
        <Typography variant="caption">{item.primaryLanguage?.name}</Typography>
        <Typography variant="caption">
          Updated on {formatDate(item.updatedAt, false)}
        </Typography>
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
