import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Avatar, IconButton, CardMedia } from "@material-ui/core";


const TestCard = props => {
  const {title, imageUrl } = props;
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
      <CardHeader title={title} 
    style={{ textAlign: 'center' }}/>
      <CardMedia style={myTheme.cardHeaderStylePref} image={imageUrl} />
      
    </Card>
  );
};

export default TestCard;
