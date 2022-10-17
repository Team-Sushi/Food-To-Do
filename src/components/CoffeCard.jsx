import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Avatar, IconButton, CardMedia } from "@material-ui/core";

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
