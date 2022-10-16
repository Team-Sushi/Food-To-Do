import React from 'react';
import Navbar from '../components/navbar';
import { Grid } from "@material-ui/core";
import { IconButton } from '@mui/material';
import TestContent from '../components/testContent';
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Button from '@material-ui/core/Button';
import SellIcon from '@mui/icons-material/Sell';
import DateRangeIcon from '@mui/icons-material/DateRange';
import TagSharpIcon from '@mui/icons-material/TagSharp';
import Select from '@material-ui/core/Select';
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';

const TestItem = () => {
  return (
    <Grid container direction="column">
      <Grid item gutterBottom>
        <Navbar/>
      </Grid>
    
    <Grid container direction="row">
      <IconButton aria-label='skip-back' href='/dashboard'>
        <SkipPreviousIcon sx={{ fontSize: 50}}/>
      </IconButton>
      
      {/* <Grid item>
        <Typography variant='h3' component="h3" gutterBottom>
          Next Shopping List
        </Typography>
      </Grid> */}

    </Grid>
      
      
      <Grid item container>
        <Grid item xs={false} sm={1}/>
        <Grid item xs={12} sm={4} align="center">
            <TestContent />
            <IconButton aria-label='empty-heart'>
                <FavoriteBorderIcon sx={{ fontSize: 50}}/>
            </IconButton>
            <IconButton aria-label='add-cart'>
                <AddShoppingCartIcon sx={{ fontSize: 50}}/>
            </IconButton>
            <Button variant="contained" startIcon={<AddCircleIcon />}>
                Recently Purchased
            </Button>
        </Grid>
        <Grid item xs={false} sm={1}/>
        <Grid item xs={12} sm={5} align="center">
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" size='small'>Expiry</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Expiry"
                // onChange={handleChange}
            >
                <MenuItem value={10}>Use By</MenuItem>
                <MenuItem value={20}>Best Before</MenuItem>
            </Select>
            </FormControl>

            

        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
    </Grid>
  );
};

export default TestItem;
