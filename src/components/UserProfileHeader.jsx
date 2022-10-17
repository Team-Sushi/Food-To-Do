import React from "react";
import {FiLogOut} from 'react-icons/fi';
import DefaultUserImage from  '../components/defaultUserImage.png';
import { AppBar, Avatar, Chip, Toolbar, Typography } from "@material-ui/core";
import Box from '@mui/material/Box';
import { makeStyles } from "@material-ui/styles";
import Button from "@mui/material/Button";
import { maxWidth } from "@mui/system";
import axios from "axios";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  },
  chipRoot: {
    // marginBottom: 16,
    "&:hover .MuiAvatar-root": {
        color: "black",
      },
    "& .MuiAvatar-root:hover": {
        transition: "transform .5s",
        transform: "scale(1.1)",
    }
  }
}));

function onLogout(e) {
  e.preventDefault();
  axios
      .post('http://localhost:5000/user/logout', {}, {
          withCredentials: true
      })
      .then((response) => {
          if (response) {
              console.log(response);
              alert(`You've logged out successfully!`);
          }
      })
      .catch((err) => {
          console.log(err);
      })
}

const UserProfileHeader = ({ username, userPhotoLink }) => {
  const classes = useStyles();
  return (
    <AppBar position="static" style={{background: "#FFE6DC", padding: "1vw 2vw"}}>
      <Toolbar>
        <Box href="" paddingRight="10px">

            {/* <Chip
                className={classes.chipRoot}
                style={{width: maxWidth, height: 60}}
                avatar=<Avatar style={{backgroundColor: "#D3D3D3", height: 50, width: 50, cursor: 'pointer'}} src={userPhotoLink} alt='image not found'/>
                label="Jason Nicholas Susanto"
            /> */}

            <Avatar style={{backgroundColor: "#D3D3D3", height: 50, width: 50, cursor: 'pointer'}} src={userPhotoLink} alt='image not found'/>
        </Box>
        <Typography className={classes.typographyStyles} style={{fontSize: '1.1rem', color: 'black'}}>
            Welcome back, {username}!
            <br/>
            <Button style={{color: "black"}} onClick={onLogout}>
                <FiLogOut style={{paddingRight: "5px"}}/>
                Logout
            </Button>
        </Typography>
        {/* <Button href="#text-buttons">Link</Button> */}
      </Toolbar>
    </AppBar>
  );
};

UserProfileHeader.defaultProps = {
    username: "[user's name]",
    userPhotoLink: DefaultUserImage,
}

export default UserProfileHeader;