import React from "react";
import { ButtonGroup } from "@mui/material";
import { sectionsList } from "../../services/graphql/queries";
import AppButton from "../UI/AppButton/AppButton";

export default function Menu({ setSection }) {
  return (
    <ButtonGroup
      sx={{
        width: "20%",

        textAlign: "start",
        color: "white",
      }}
      orientation="vertical"
      aria-label="vertical outlined button group"
    >
      {sectionsList.map((section, index) => (
        <AppButton setSection={setSection} section={section} key={index} />
      ))}
    </ButtonGroup>
  );
}
