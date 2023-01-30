// dynamic route
import React from "react";
import { Box, Typography } from "@mui/material";

// This page is very simple and doesn't contain any logic. This is just to show how I would fetch that single item accordingly to the id and the endpoint.

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  // fetch data from an external API endpoint / database
  // const res = await fetch(`https://endpoint/${id}`);
  // const data = await res.json();
  // We can also make this happen on the client side, creating a dynamic route

  return {
    props: {
      id,
      //data
    },
  };
};

const Details = ({ id }) => {
  return (
    <Box>
      <Typography variant="h4">{id}</Typography>
    </Box>
  );
};

export default Details;
