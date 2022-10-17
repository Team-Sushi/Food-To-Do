import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { CardMedia } from "@material-ui/core";

// import { makeStyles } from "@mui/material/styles";
// import {Card, CardHeader, CardMedia} from "@mui/material";


const TestCard = props => {
  const {itemName, itemImageURL } = props;
  const myTheme = {
    cardHeaderStylePref:{
       height: 400,
       padding: 20
     }
 }

  return (
    <Card elevation={12}>
      {/* <CardMedia style={{ height: "200px" }} image={imageUrl} /> */}
      {/* <Typography variant="h4" style={{ textAlign: 'center'}}>
        {title}
      </Typography> */}
      <CardHeader title={itemName} 
          style={{ textAlign: 'center' }}/>
      <CardMedia style={myTheme.cardHeaderStylePref} image={itemImageURL} />
      
    </Card>
  );
};

export default TestCard;
