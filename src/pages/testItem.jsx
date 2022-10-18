import React from 'react';
import Navbar from '../components/navbar';
import { Grid } from "@material-ui/core";
import { IconButton } from '@mui/material';
import TestContent from '../components/testContent';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Select from '@material-ui/core/Select';
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';
import MaterialUIPickers from '../components/calendar';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import axios from 'axios';
import dayjs from 'dayjs';


function TestItem ({favState, cartState, recentState}) {
  
  const allItemsURL = 
    "https://ftd-server.herokuapp.com/item"
    // "http://localhost:3012/item"
  const [items, setItems] = useState([]);

  axios
        .get(allItemsURL, {withCredentials:true})
        .then((response) => {
          setItems(response.data)
        })

  const [date, setDate] = useState(dayjs(''))

  const addDate = (date) => {
    setDate(date)
    console.log(date)
  }

  function handleClick(e) {
    e.preventDefault();

    if(cart === false) {
    axios
    //https://ftd-server.herokuapp.com/item/addItem
        .post('https://ftd-server.herokuapp.com/item/addItem', {
            itemID: items[1]._id,
            quantity: 1,
            expiryType: "Best before",
            expiryDate: date,
        }, {
            withCredentials: true
        })
        .then((response) => {
            console.log(response.status);
            console.log(response.data);
            alert(`Item added to shopping list: ${items[1].itemName}.`)
            setFavourite(favState);
            cartState = true;
            setCart(cartState);
            setRecent(recentState);
        })
        .catch((err) => {
            console.log(err);
            alert(`Something is wrong. Please try again later.`);
        })
      } else {
        axios
        .post('https://ftd-server.herokuapp.com/item/removeItem', {
            itemID: items[1].item_id,
        }, {
            withCredentials: true
        })
        .then((response) => {
            console.log(response.status);
            console.log(response.data);
            alert(`Item added to shopping list: ${items[1].itemName}.`)
            setFavourite(favState);
            cartState = false;
            setCart(cartState);
            setRecent(recentState);
        })
        .catch((err) => {
            console.log(err);
            alert(`Something is wrong. Please try again later.`);
        })
      }
  }

  const [favourite, setFavourite] = useState(favState)
  const [cart, setCart] = useState(cartState)
  const [recent, setRecent] = useState(recentState)

  return (
    <Grid container direction="column">
      <Grid item gutterBottom>
        <Navbar/>
      </Grid>
    
    <Grid container direction="row">
      <IconButton aria-label='skip-back' href='/dashboard'>
        <SkipPreviousIcon sx={{ fontSize: 50}}/>
      </IconButton>

    </Grid>
      
      
      <Grid item container>
        <Grid item xs={false} sm={1}/>
        <Grid item xs={12} sm={4} align="center">
            <TestContent item={items[1]}/>
            
            <IconButton aria-label='empty-heart' onClick={()=>setFavourite(!favourite)}>

              {favourite ? <FavoriteIcon sx={{fontSize: 50}}/> : <FavoriteBorderIcon sx={{ fontSize: 50}}/>}
              
            </IconButton>
            
            <IconButton aria-label='add-cart' onClick={handleClick}>

              {cart ? <RemoveShoppingCartIcon sx={{fontSize: 50}}/> : <AddShoppingCartIcon sx={{ fontSize: 50}}/>}


            </IconButton>

            <IconButton aria-label='recents' onClick={()=>setRecent(!recent)}>

              {recent ? <HomeIcon sx={{fontSize: 50}}/> : <HomeOutlinedIcon sx={{ fontSize: 50}}/>}

            </IconButton>
        </Grid>
        <Grid item xs={false} sm={1}/>
        <Grid item xs={12} sm={5} align='right'>
          <FormControl fullWidth sx={{ pb: 8}}>
            <InputLabel id="demo-simple-select-label2" size='small'>Item Category</InputLabel>
            <Select
                labelId="demo-simple-select-label2"
                id="demo-simple-select2"
                // value={age}
                label="Item Category"
                // onChange={handleChange}
            >
                <MenuItem value={10}>Fresh Produce</MenuItem>
                <MenuItem value={20}>Dairy</MenuItem>
                <MenuItem value={30}>Meat</MenuItem>
                <MenuItem value={40}>Pantry</MenuItem>
            </Select>
            </FormControl>


            <FormControl fullWidth sx={{ pb: 8}}>
            <InputLabel id="demo-simple-select-label" size='small'>Expiry Category</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Expiry Category"
                // onChange={handleChange}
            >
                <MenuItem value={"Use by"}>Use By</MenuItem>
                <MenuItem value={"Best before"}>Best Before</MenuItem>
                <MenuItem value={"Not available"}>Not available</MenuItem>
            </Select>
            </FormControl>
            <MaterialUIPickers onAdd={addDate}/>

            
        </Grid>
        {/* <Grid item xs={12} sm={5} align="center">
          <MaterialUIPickers />
        </Grid> */}

        <Grid item xs={false} sm={1} />
      </Grid>
    </Grid>
  );
};

TestItem.defaultProps = {
  favState: false,
  cartState: false,
  recentState: false,
}

export default TestItem;
