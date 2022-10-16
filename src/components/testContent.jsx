import React from "react";
import TestCard from "./testCard";
import { Grid } from "@material-ui/core";
import testList from "./testConstants";

const TestContent = () => {
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

export default TestContent;
