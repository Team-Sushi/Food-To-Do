import React from "react";
import { Grid } from "@material-ui/core";
// import coffeMakerList from "./constants";
import RecentlyPurCard from "./recentlyPurCard";

const RecentlyPurContent = ({recentlyPurchasedItems}) => {
  const getCard = cardObj => {
    return (
      <Grid item xs={12} sm={3}>
        <RecentlyPurCard {...cardObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={4}>
      {recentlyPurchasedItems.map(cardObj => getCard(cardObj))}
    </Grid>
  );
};

RecentlyPurContent.defaultProps = {
  recentlyPurchasedItems: [{}],
}

export default RecentlyPurContent;
