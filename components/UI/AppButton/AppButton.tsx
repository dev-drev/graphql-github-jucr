import { Button, Typography } from "@mui/material";
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
    <Button
      sx={{
        border: `0.2px solid ${theme.palette.grey.grey80}}`,
        width: "100%",
        display: "flex",
        justifyContent: "start",
        padding: 1,
        color: "white",
      }}
      onClick={() => setSection(section.type)}
    >
      <Typography sx={{ color: theme.palette.grey.white90 }} variant="caption">
        {" "}
        {section.name}
      </Typography>
    </Button>
  );
};

export default AppButton;
