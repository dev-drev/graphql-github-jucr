import { ListItem } from "@mui/material";
import React from "react";
import { DocumentNode } from "graphql";
import { QueryType } from "../../../../services/graphql/types";
import theme from "../../../../services/theme";

// This is a reusable component that is used in the AppList component for the Menu and every other component that needs a list item. It can be customized to fit the needs of the component that is using it.

type ButtonProps = {
  setSection: (section: DocumentNode) => void;
  section: QueryType;
};

const AppListItem = ({ setSection, section }: ButtonProps) => {
  return (
    <ListItem
      onClick={() => setSection(section.type)}
      sx={{
        cursor: "pointer",
        width: "100%",
        "&:hover": {
          backgroundColor: theme.palette.grey.grey80,
        },
        transition: "all 0.3s ease-in-out",
        color: theme.palette.grey.white90,
        border: `0.6px solid ${theme.palette.grey.grey80}`,
      }}
    >
      {section.name}
    </ListItem>
  );
};

export default AppListItem;
