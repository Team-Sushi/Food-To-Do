import React from 'react';
import Navbar from '../components/navbar';
import { Grid } from "@material-ui/core";
import { IconButton } from '@mui/material';
import Content from '../components/Content';
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Favorites() {

  var favoritesURL =
    "https://ftd-server.herokuapp.com/item/favorites";
    // "http://localhost:3012/item/favorites";

    const [favorites, setFavorites] = useState([]);
  
    useEffect(() => {
      axios
        .get(favoritesURL, {withCredentials:true})
        .then((response) => {
        setFavorites(response.data)
        });
    }, []);
    

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
          Favorites
        </Typography>
      </Grid>

    </Grid>
      
      
      <Grid item container>
        <Grid item xs={false} sm={2}/>
        <Grid item xs={12} sm={8}>
          <Content UserItemsList={favorites}/>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>

      {/* <Grid container direction='row' justifyContent='center' sx={{pt: 2}}>
        <Typography variant='caption text'>
          Made with love by Team Sushi
        </Typography>
      </Grid> */}
    </Grid>
  );
};

export default Favorites;
