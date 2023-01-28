import { Button } from "@mui/material";
import React from "react";
import { DocumentNode } from "graphql";
import { QueryType } from "../../../services/graphql/types";
import theme from "../../../services/theme";

type ButtonProps = {
  setSection: (section: DocumentNode) => void;
  section: QueryType;
};

const AppButton = ({ setSection, section }: ButtonProps) => {
  return (
    <div>
      <Button
        variant="text"
        sx={{
          width: "100%",
          borderBottom: `1px solid ${theme.palette.grey.grey80}`,
          padding: 1,
          textAlign: "start",
          color: "white",
        }}
        onClick={() => setSection(section.type)}
      >
        {section.name}
      </Button>
    </div>
  );
};

export default AppButton;
