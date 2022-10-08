import React from 'react';
import "./nextShop.css";
import skipback from "./skip-back.png";
import Navbar from '../components/navbar';
import { Grid } from "@material-ui/core";
import { IconButton } from '@mui/material';
import Content from '../components/Content';
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const NextShop = () => {
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
          Next Shopping List
        </Typography>
      </Grid>

    </Grid>
      
      
      <Grid item container>
        <Grid item xs={false} sm={2}/>
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>

      {/* <Grid container direction='row' justifyContent='center' sx={{pt: 2}}>
        <Typography variant='caption text'>
          Made with love by Team Sushi
        </Typography>
      </Grid> */}
    </Grid>

    

      // <div className="next-shopping-list-desktop">
      //   <Navbar />
      //   <div className="next-shopping-list-title-group">
      //     <img className="skip-back-icon" alt="" src={skipback} />
      //     <div className="next-shopping-list">Next Shopping List</div>
      //   </div>

      //   <div className="content-div">
      //     <div className="demo-items-group">
      //       <div className="items-row-group">
      //         <div className="demo-items-row-1">
      //           <div className="item-demo-1">
      //             <div className="rectangle-div" />
      //             <div className="item-name-div">Item Name</div>
      //           </div>
      //           <div className="item-demo-1">
      //             <div className="rectangle-div" />
      //             <div className="item-name-div">Item Name</div>
      //           </div>
      //           <div className="item-demo-1">
      //             <div className="rectangle-div" />
      //             <div className="item-name-div">Item Name</div>
      //           </div>
      //           <div className="item-demo-1">
      //             <div className="rectangle-div" />
      //             <div className="item-name-div">Item Name</div>
      //           </div>
      //         </div>
      //         <div className="demo-items-row-1">
      //           <div className="item-demo-1">
      //             <div className="rectangle-div" />
      //             <div className="item-name-div">Item Name</div>
      //           </div>
      //           <div className="item-demo-1">
      //             <div className="rectangle-div" />
      //             <div className="item-name-div">Item Name</div>
      //           </div>
      //           <div className="item-demo-1">
      //             <div className="rectangle-div" />
      //             <div className="item-name-div">Item Name</div>
      //           </div>
      //           <div className="item-demo-1">
      //             <div className="rectangle-div" />
      //             <div className="item-name-div">Item Name</div>
      //           </div>
      //         </div>
      //         <div className="demo-items-row-1">
      //           <div className="item-demo-1">
      //             <div className="rectangle-div" />
      //             <div className="item-name-div">Item Name</div>
      //           </div>
      //           <div className="item-demo-1">
      //             <div className="rectangle-div" />
      //             <div className="item-name-div">Item Name</div>
      //           </div>
      //           <div className="item-demo-1">
      //             <div className="rectangle-div" />
      //             <div className="item-name-div">Item Name</div>
      //           </div>
      //           <div className="item-demo-1">
      //             <div className="rectangle-div" />
      //             <div className="item-name-div">Item Name</div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>

      //   <div className="made-with-by-teamsushi">
      //     <span>{`Made with `}</span>
      //     <span className="span">♥</span>
      //     <span> by TeamSushi</span>
      //   </div>
      // </div>
  );
};

export default NextShop;
