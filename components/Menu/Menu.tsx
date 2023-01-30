import React from "react";
import { List } from "@mui/material";
import { sectionsList } from "../../services/graphql/queries";
import AppListItem from "../UI/Atoms/AppListItem/AppListItem";

export default function Menu({ setSection }) {
  // This is the side menu
  return (
    <List
      sx={{
        borderRadius: 2,
        height: "auto",
        width: "15%",
        textAlign: "start",
        color: "white",
      }}
    >
      {sectionsList.map((section, index) => (
        <AppListItem setSection={setSection} section={section} key={index} />
      ))}
    </List>
  );
}
