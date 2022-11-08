import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import {Grid} from '@mui/material';
import { IconButton } from '@mui/material';
import ItemContent from '../components/itemContent';
import {Typography} from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { useParams } from 'react-router-dom';

function Category() {

  const myTheme = {
    cardHeaderStylePref:{
       height: 200,
       padding: 20
     }
  }

  let { category } = useParams();

  // "http://localhost:3012/item/category/"
  // "https://ftd-server.herokuapp.com/item/category/"
  var categoryURL = 
    "http://localhost:3012/item/category/";

  categoryURL = categoryURL.concat(category);

  const [categoryList, setCategoryList] = useState([])

  axios
        .get(categoryURL, {withCredentials:true})
        .then((response) => {
          setCategoryList(response.data)
        })

  // Change category strings to proper form
  
  if (category === 'freshproduce') {
    category = "Fresh Produce"
  } else if (category === 'meat&poutry') {
    category = "Meat & Poutry"
  } else {
    category = category.charAt(0).toUpperCase() + category.slice(1);
  }

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
        {/* change according to which category */}
        <Typography variant='h3' component="h3" gutterBottom>
          {category}
        </Typography>        
      </Grid>

    </Grid>
      
      
      <Grid item container>
        <Grid item xs={false} sm={1}/>
        <Grid item xs={12} sm={10}>

          <ItemContent allItems={categoryList} />

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

export default Category;
