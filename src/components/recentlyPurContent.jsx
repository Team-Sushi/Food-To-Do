import React from "react";
import { Grid } from "@material-ui/core";
import coffeMakerList from "./constants";
import RecentlyPurCard from "./recentlyPurCard";

const RecentlyPurContent = () => {
  const getCard = cardObj => {
    return (
      <Grid item xs={12} sm={3}>
        <RecentlyPurCard {...cardObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={4}>
      {coffeMakerList.map(cardObj => getCard(cardObj))}
    </Grid>
  );
};

export default RecentlyPurContent;
