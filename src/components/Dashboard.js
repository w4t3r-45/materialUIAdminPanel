import { useState } from 'react';
import { Badge , Container, IconButton, Avatar, Typography, Box, Drawer, Divider, List, ListItemButton, ListItemText, ListItem, ListItemIcon, AppBar, Toolbar, Menu, MenuItem, Button } from '@material-ui/core';
import { styled } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { createTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import MenuIcon from '@material-ui/icons/Menu';
import { Person, Settings, Notifications } from '@material-ui/icons';

const DrawerStyle = {
  width: '240px',
  '& 	.MuiDrawer-paper': { width: '240px', boxSizing: 'border-box' }
};

// here our theme is retuning undefined
// const useStyles = makeStyles((theme) => ({
//   root : {
//     background: theme.background
//   },
//   appBar : {
//     zIndex: theme.zInndex.drawer+1
//   },
// }));

const StyledDiv = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

// menu things 






export default function Dashboard() {
  // const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledAppBar position="fixed" elevation={0}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} >
            <MenuIcon cursor="pointer" fontSize="medium" />
          </Box>

          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <Badge badgeContent={5} invisible={false} fontSize="small" color="error">
              <Notifications  sx={{ width: 25, height: 25 , color:'white'}} />
            </Badge>
          </IconButton>

          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <Avatar sx={{  width: 25, height: 25 }}>S</Avatar>
          </IconButton>





          {/* Notifications Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              elevation: 0.2,
            }}
          >
            <Box sx={{ ml: 2, mb: 1, outline: 'none' }}>
              <Typography variant="h6" noWrap sx={{ fontSize: '0.9rem', fontWeight: '400' }}>John Red</Typography>
              <Typography variant="h6" noWrap sx={{ fontSize: '0.7rem', fontWeight: '400' }}>Admin</Typography>
            </Box>
            <Divider />
            <Box sx={{ mb: 2, mt: 2 }}>
              <MenuItem>
                <ListItemIcon>
                  <Person fontSize="small" sx={{ mr: 2 }} /> Profile
                </ListItemIcon>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" sx={{ mr: 2 }} /> Settings
                </ListItemIcon>
              </MenuItem>
            </Box>
            <Container>
              <Button variant="outlined" sx={{ width: '180px' }} size="small">Log out</Button>
            </Container>
          </Menu>
          {/* profile menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              elevation: 0.2,
            }}
          >
            <Box sx={{ ml: 2, mb: 1, outline: 'none' }}>
              <Typography variant="h6" noWrap sx={{ fontSize: '0.9rem', fontWeight: '400' }}>John Red</Typography>
              <Typography variant="h6" noWrap sx={{ fontSize: '0.7rem', fontWeight: '400' }}>Admin</Typography>
            </Box>
            <Divider />
            <Box sx={{ mb: 2, mt: 2 }}>
              <MenuItem>
                <ListItemIcon>
                  <Person fontSize="small" sx={{ mr: 2 }} /> Profile
                </ListItemIcon>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" sx={{ mr: 2 }} /> Settings
                </ListItemIcon>
              </MenuItem>
            </Box>
            <Container>
              <Button variant="outlined" sx={{ width: '180px' }} size="small">Log out</Button>
            </Container>
          </Menu>
        </Toolbar>
      </StyledAppBar>


      <Drawer variant="permanent" sx={DrawerStyle}>
        <StyledDiv />
        hello
          <Divider />
        <List>
          <Typography variant="h2" sx={{ fontSize: '1rem', fontWeight: '500' }}>General</Typography>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>

      </Drawer>
    </>
  )
}