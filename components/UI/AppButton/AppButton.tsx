import { Button } from "@mui/material";
import React from "react";
import { DocumentNode } from "graphql";
import { QueryType } from "../../../services/graphql/types";

type ButtonProps = {
  setSection: (section: DocumentNode) => void;
  section: QueryType;
};

const AppButton = ({ setSection, section }: ButtonProps) => {
  return (
    <div>
      <Button
        sx={{
          width: "100%",
          border: "1px solid yellow",
          padding: 5,
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
