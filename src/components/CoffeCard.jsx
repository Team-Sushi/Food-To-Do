import React from "react";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import {CardMedia } from "@material-ui/core";

import {Card, CardContent, Typography, CardMedia} from "@mui/material";
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
      <CardMedia style={myTheme.cardHeaderStylePref} image={itemImageURL} />
      {/* <CardHeader title={item.itemName} variant="h8" noWrap
        style={{ textAlign: 'center', fontSize: '100px'}}/> */}
      <CardContent style={{backgroundColor: '#FFE6DC'}}>
        <Typography gutterBottom noWrap variant="h6" component="div" style={{textAlign:'center'}}>
          {itemName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CoffeCard;
