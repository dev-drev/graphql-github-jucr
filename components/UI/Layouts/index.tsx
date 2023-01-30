import React from "react";
import { Box } from "@mui/material";
import theme from "../../../services/theme";
import { DocumentNode } from "graphql";
import { Repositories, Users, Discussion, Issues } from "./LayoutTypes";

// This is the main Layout component that is used in the DisplayData component to render the data according to the section that is passed to it.

type Props = {
  item: any;
  section: DocumentNode;
  topic?: string;
};
const Layout = ({ item, section, topic }: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
        borderBottom: `1px solid ${theme.palette.grey.grey80}`,
        p: 1,
        textAlign: "start",
        color: "white",
      }}
    >
      {item.__typename === "User" && <Users item={item} />}
      {item.__typename === "Organization" && <Users item={item} />}
      {item.__typename === "Repository" && <Repositories item={item} />}
      {item.__typename === "Issue" && <Issues item={item} />}
      {item.__typename === "PullRequest" && <Issues item={item} />}
      {item.__typename === "Discussion" && <Discussion item={item} />}
    </Box>
  );
};

export default Layout;
