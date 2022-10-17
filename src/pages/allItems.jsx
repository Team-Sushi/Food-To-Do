import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
// import { Grid } from "@material-ui/core";
import {Grid} from '@mui/material';
import { IconButton } from '@mui/material';
import ItemContent from '../components/itemContent';
import {Typography} from '@mui/material';
// import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

function AllItems() {

  const myTheme = {
    cardHeaderStylePref:{
       height: 200,
       padding: 20
     }
  }

  var allItemsURL = 
    "https://ftd-server.herokuapp.com/item"
    // "https://ftd-server.herokuapp.com/item";

  const [allItemList, setAllItemList] = useState([])

  axios
        .get(allItemsURL, {withCredentials:true})
        .then((response) => {
          setAllItemList(response.data)
        })

  return (
    <Grid container direction="column">
      <Grid item gutterBottom>
        <Navbar/>
      </Grid>
    
    <Grid container direction="row">
      <IconButton aria-label='skip-back' href='/dashboard'>
        <SkipPreviousIcon sx={{ fontSize: 50}}/>
      </IconButton>
      
      <Grid item>
        <Typography variant='h3' component="h3" gutterBottom>
          All Items
        </Typography>        
      </Grid>

    </Grid>
      
      
      <Grid item container>
        <Grid item xs={false} sm={1}/>
        <Grid item xs={12} sm={10}>

          <ItemContent allItems={allItemList} />

        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>

      {/* <Grid container direction='row' justifyContent='center' sx={{pt: 2}}>
        <Typography variant='caption text'>
          Made with love by Team Sushi
        </Typography>
      </Grid> */}
    </Grid>
  );
};

export default AllItems;
