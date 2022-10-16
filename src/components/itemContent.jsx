import React from "react";
import CoffeCard from "./CoffeCard";
import { Grid } from "@material-ui/core";
import coffeMakerList from "./constants";

const ItemContent = () => {
  const getItemCard = itemObj => {
    return (
      <Grid item xs={12} sm={3}>
        <CoffeCard {...itemObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={4}>
      {coffeMakerList.map(itemObj => getItemCard(itemObj))}
    </Grid>
  );
};

export default ItemContent;
