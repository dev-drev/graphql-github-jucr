import React from "react";
import { ButtonGroup, List } from "@mui/material";
import { sectionsList } from "../../services/graphql/queries";
import AppButton from "../UI/AppListItem/AppListItem";

export default function Menu({ setSection }) {
  return (
    <List
      sx={{
        borderRadius: 2,
        height: "auto",
        width: "10%",
        textAlign: "start",
        color: "white",
      }}
    >
      {sectionsList.map((section, index) => (
        <AppButton setSection={setSection} section={section} key={index} />
      ))}
    </List>
  );
}
