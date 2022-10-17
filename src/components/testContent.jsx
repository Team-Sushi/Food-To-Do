import React from "react";
import TestCard from "./testCard";
import { Grid } from "@material-ui/core";
// import testList from "./testConstants";

// import {Grid} from "@mui/material";


const TestContent = ({item}) => {

  // const testList = [{itemName: itemname, itemImageURL: itemimageURL}];
  const testList = [item]

  const getTestCard = testObj => {
    return (
      <Grid item xs={12} >
        <TestCard {...testObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={4}>
      {testList.map(testObj => getTestCard(testObj))}
    </Grid>
  );
};

TestContent.defaultProps = {
  itemname: "Banana Cavendish",
  itemimageURL: "https://cdn0.woolworths.media/content/wowproductimages/large/133211.jpg",
}

export default TestContent;
