import { Typography } from "@mui/material";
let moment = require("moment"); // require
import React from "react";

// we might also just create a helper function for this but creating a new component might allow us to add more functionality later

const TypographyDate = (date) => {
  let formatDate = moment(date).format("MMMM Do YYYY");
  return <Typography variant="caption">{formatDate}</Typography>;
};

export default TypographyDate;
