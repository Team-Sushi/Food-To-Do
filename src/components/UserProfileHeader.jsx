import React from "react";
import {FiLogOut} from 'react-icons/fi';
import DefaultUserImage from  '../components/defaultUserImage.png';
import { AppBar, Avatar, Toolbar, Typography } from "@material-ui/core";
import Box from '@mui/material/Box';
import { makeStyles } from "@material-ui/styles";
import Button from "@mui/material/Button";
import { maxWidth } from "@mui/system";
import axios from "axios";

// import ResponsiveDialog from './UserProfile';
// import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";
// import { makeStyles } from "@mui/material/styles";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PasswordForm from './PasswordEntry';
import { IconButton } from "@mui/material";

function ResponsiveDialog(){
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    /* update this to send changed password to database*/
    setOpen(true);
  };

  const handleClose = () => {
    /* update this to cancel changes*/
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Update Password
      </Button> */}
      <IconButton onClick={handleClickOpen}>
              <Avatar style={{backgroundColor: "#D3D3D3", height: 50, width: 50}} src={'./defaultUserImage.png'} alt='image not found' />

      </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Update your password"}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText> */}
          <PasswordForm />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


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
      .post('https://ftd-server.herokuapp.com/user/logout', {}, {
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
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    /* update this to send changed password to database*/
    setOpen(true);
  };

  const handleClose = () => {
    /* update this to cancel changes*/
    setOpen(false);
  };

  if (username === '') {
    username = "[username]"
  }
  
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
            {/* <IconButton onClick={handleClickOpen}>
              <Avatar style={{backgroundColor: "#D3D3D3", height: 50, width: 50}} src={userPhotoLink} alt='image not found' />

            </IconButton> */}
            <ResponsiveDialog
              open={open}
              onClose={handleClose}
              />

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