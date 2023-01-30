// dynamic route
import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "../../services/theme";

// This page is very simple and doesn't contain any logic. This is just to show how I would fetch that single item accordingly to the id and the endpoint.

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  // fetch data from an external API endpoint / database
  // const res = await fetch(`https://endpoint/${id}`);
  // const data = await res.json();
  // We can also make this happen on the client side, creating a specific query for each item but considering that the GitHub Database is very large and nested, I would prefer to do it on the server side.

  return {
    props: {
      id,
      //data,
    },
  };
};

const Details = ({ id }) => {
  return (
    <Box
      display={{
        width: "100%",
        height: "100vh",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.grey.grey,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4">
        Details page for ID: <hr /> "{id}"{" "}
      </Typography>
    </Box>
  );
};

export default Details;
