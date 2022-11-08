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
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


function TestItem ({favState, cartState, recentState}) {

  // Get one item from the database based on the item ID in the URL params, only called when the page is first loaded.
  const { itemID } = useParams();

  const getOneItemURL =
    // `http://localhost:3012/item/getOneItem/${itemID}`
    `https://ftd-server.herokuapp.com/item/getOneItem/${itemID}`

  const checkFavURL =
  //`http://localhost:3012/item/checkFav/${itemID}`
   `https://ftd-server.herokuapp.com/item/checkFav/${itemID}`

  const checkCartURL =
  //`http://localhost:3012/item/inCart/${itemID}`
  `https://ftd-server.herokuapp.com/item/inCart/${itemID}`

  const [item, setItem] = useState({});
  const [favourite, setFavourite] = useState(favState)
  const [cart, setCart] = useState(cartState)
  const [recent, setRecent] = useState(recentState)

  useEffect(() => {
    axios
          .get(getOneItemURL, { withCredentials:true })
          .then((response) => {
            setItem(response.data);
          });

    axios
    .get(checkFavURL, { withCredentials:true })
    .then((response) => {
      setFavourite(response.data);
    });

    axios
    .get(checkCartURL, { withCredentials:true })
    .then((response) => {
      setCart(response.data);
    });
    
  }, []);



  const [expiryCategory, setExpiryCategory] = useState('Use by')
  const [date, setDate] = useState(dayjs())

  const addDate = (date) => {
    setDate(date)
    console.log(date)
  }

  function handleClick(e) {
    e.preventDefault();

    if (cart === false) {
      axios
      //https://ftd-server.herokuapp.com/item/addItem
      //http://localhost:3012/item/addItem
        .post('https://ftd-server.herokuapp.com/item/addItem', {
            itemID: item._id,
            quantity: 1,
            expiryType: expiryCategory,
            expiryDate: date,
        }, {
            withCredentials: true
        })
        .then((response) => {
            console.log(response.status);
            console.log(response.data);
            alert(`Item added to shopping list: ${item.itemName}.`)
            cartState = true;
            setCart(cartState);
        })
        .catch((err) => {
            console.log(err);
            alert(`Something is wrong. Please try again later.`);
        })
    } else {
        //https://ftd-server.herokuapp.com/item/removeItem
        //http://localhost:3012/item/removeItem
        axios
        .post('https://ftd-server.herokuapp.com/item/removeItem', {
            itemID: item._id,
        }, {
            withCredentials: true
        })
        .then((response) => {
            console.log(response.status);
            console.log(response.data);
            alert(`Item removed from shopping list: ${item.itemName}.`)
            cartState = false;
            setCart(cartState);
        })
        .catch((err) => {
            console.log(err);
            alert(`Something is wrong. Please try again later.`);
        })
      }
  }

  function handleClickFav(e) {
    e.preventDefault();

    if(favourite === false) {
    axios
    // https://ftd-server.herokuapp.com/item/addFavorite
    // http://localhost:3012/item/addFavorite
        .post('https://ftd-server.herokuapp.com/item/addFavorite', {
            itemID: item._id,
        }, {
            withCredentials: true
        })
        .then((response) => {
            console.log(response.status);
            console.log(response.data);
            alert(`Item added to favourite list: ${item.itemName}.`)
            favState = true;
            setFavourite(favState);
        })
        .catch((err) => {
            console.log(err);
            alert(`Something is wrong. Please try again later.`);
        })
      } else {
        axios
        //https://ftd-server.herokuapp.com/item/removeFavorite
        //http://localhost:3012/item/removeFavorite
        .post('https://ftd-server.herokuapp.com/item/removeFavorite', {
            itemID: item._id,
        }, {
            withCredentials: true
        })
        .then((response) => {
            console.log(response.status);
            console.log(response.data);
            alert(`Item removed from favourite list: ${item.itemName}.`)
            favState = false;
            setFavourite(favState);
        })
        .catch((err) => {
            console.log(err);
            alert(`Something is wrong. Please try again later.`);
        })
      }
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

    </Grid>
      
      
      <Grid item container>
        <Grid item xs={false} sm={1}/>
        <Grid item xs={12} sm={4} align="center">
            <TestContent item={item}/>
            
            <IconButton aria-label='empty-heart' onClick={handleClickFav}>

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
            <InputLabel id="demo-simple-select-label" size='small'>Expiry Category</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Expiry Category"
                onChange={(e) => setExpiryCategory(e.target.value)}
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
