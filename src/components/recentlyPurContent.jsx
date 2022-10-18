import React from "react";
import { Grid } from "@mui/material";
import { CardActionArea, Card, CardMedia, CardContent, Typography } from "@mui/material";

const RecentlyPurContent = ({recentlyPurchasedItems}) => {
  const myTheme = {
    cardHeaderStylePref:{
       height: 200,
       padding: 20
     }
  }

  return (
    <Grid container spacing={4}>
      {recentlyPurchasedItems.map((item) => (
        <Grid item xs={12} sm={3}>
          {/* <CardActionArea href={`/item/${item._id}`}></CardActionArea> */}
          <CardActionArea href={`/item/${item._id}`}>
            <Card>
              <CardMedia style={myTheme.cardHeaderStylePref} image={item.itemImageURL} />
              {/* <CardHeader title={item.itemName} variant="h8" noWrap
                style={{ textAlign: 'center', fontSize: '100px'}}/> */}
              <CardContent style={{backgroundColor: '#FFE6DC'}}>
                <Typography gutterBottom noWrap variant="h6" component="div" style={{textAlign:'center'}}>
                  {item.itemName}
                </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
      )
      )}
    </Grid>
  );
};

RecentlyPurContent.defaultProps = {
  UserItemsList: [{}],
}

export default RecentlyPurContent;
