import React from "react";
import CoffeCard from "./CoffeCard";
// import { Grid } from "@material-ui/core";

import { Grid } from "@mui/material";

// Next shop, recently purchased, favourites -> pages that are tailored to the user

const Content = ({UserItemsList}) => {
  const getCoffeMakerCard = coffeMakerObj => {
    return (
      <Grid item xs={12} sm={3}>
        <CoffeCard {...coffeMakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={4}>
      {UserItemsList.map(coffeMakerObj => getCoffeMakerCard(coffeMakerObj))}
    </Grid>
  );
};

Content.defaultProps = {
  UserItemsList: [{}],
}

export default Content;
