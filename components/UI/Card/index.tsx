import React from "react";
import { Box } from "@mui/material";
import Repositories from "./Layouts/Repositories";
import {
  QueryType,
  UserOrganizationUnion,
} from "../../../services/graphql/types";
import theme from "../../../services/theme";
import Users from "./Layouts/Users";
import Topic from "./Layouts/Topic";
import Discussion from "./Layouts/Discussion";
import { DocumentNode } from "graphql";

type Props = {
  item: any;
  section: DocumentNode;
};
const Card = ({ item, section }: Props) => {
  console.log("item", item);
  console.log(section.type);
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
      {item.__typename === "Topic" && <Topic item={item} />}
      {item.__typename === "Discussion" && <Discussion item={item} />}
    </Box>
  );
};


export default Card;
