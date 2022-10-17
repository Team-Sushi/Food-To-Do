import React from "react";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import {CardMedia } from "@material-ui/core";

import {Card, CardHeader, CardMedia} from "@mui/material";
import { makeStyles } from "@mui/material/styles";

const CoffeCard = props => {
  const {itemName, itemImageURL } = props;
  const myTheme = {
    cardHeaderStylePref:{
       height: 200,
       padding: 20
     }
 }

  return (
    <Card>
      {/* <CardMedia style={{ height: "200px" }} image={imageUrl} /> */}
      <CardMedia style={myTheme.cardHeaderStylePref} image={itemImageURL} />
      <CardHeader title={itemName} 
        style={{ textAlign: 'center' }}/>
    </Card>
  );
};

export default CoffeCard;
