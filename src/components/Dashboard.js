import { useState } from 'react';
import {
  Switch, Badge, Container, IconButton, Stack, Collapse,
  Avatar, Typography, Box, Drawer, Divider, List, ListItemButton,
  ListItemText, ListItem, ListItemAvatar, ListItemIcon, AppBar, Toolbar, Menu,
  MenuItem, Button
} from '@material-ui/core';
import { styled } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Assessment, PieChart, ShoppingBag, Person, Group,Close,
  ExpandLess, ExpandMore, Settings, Notifications, Payment, Textsms, ShoppingCart
} from '@material-ui/icons';

const DrawerStyle = {
  width: '240px',
  '& 	.MuiDrawer-paper': { width: '240px', boxSizing: 'border-box' }
};


// themes

const themeCorps = {
  mixins: {
    toolbar: {
      'minHeight': 50,
    }
  },

}

const darkTheme = createTheme({ ...themeCorps, palette: { mode: "dark" }, });
const lightTheme = createTheme({ ...themeCorps, palette: { mode: "light" } });







export default function Dashboard() {
  // cllapsable menus (we groupe them with checks later)

  const [openMgmt, setOpenMgmt] = useState(false);

  const handleMgmtClick = () => {
    setOpenMgmt(!openMgmt);
  };

  const [openPrdct, setOpenPrdct] = useState(false);

  const handlePrdctClick = () => {
    setOpenPrdct(!openPrdct);
  };


  // drawer logic 
  const [openDrwr , setOpenDrwr] = useState(false);

  const HandleDrawerOpen = (event)=>{
    setOpenDrwr(!openDrwr);
  } 

  const HandleDrawerClose = (event)=>{
    setOpenDrwr(false);
  }

  // theme logic
  const [theme, setTheme] = useState({
    mode: 'light',
    currentTheme: lightTheme
  });

  const switchTheme = () => {
    if (theme.mode === "light") {
      setTheme({ currentTheme: darkTheme, mode: "dark" })
    } else {
      setTheme({ currentTheme: lightTheme, mode: "light" })
    }
  };



  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [notifAnchor, setNotifAnchor] = useState(null);
  const openNotif = Boolean(notifAnchor);
  const handleNotifClick = (event) => {
    setNotifAnchor(event.currentTarget);
  }
  const handleCloseNotif = (event) => {
    setNotifAnchor(null);
  }

  const [langAnchor, setLangAnchor] = useState(null);
  const openLang = Boolean(langAnchor);
  const handleLangClick = (event) => {
    setLangAnchor(event.currentTarget);
  };
  const handleLangClose = () => {
    setLangAnchor(null);
  }


  return (
    <>
      <ThemeProvider theme={theme.currentTheme}>
        <AppBar position="fixed" color="primary" sx={{ zIndex: theme.currentTheme.zIndex.drawer + 1 }} elevation={0}>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} >
              {openDrwr ?
                 <Close cursor="pointer" onClick={HandleDrawerOpen} fontSize="medium" />
                :<MenuIcon cursor="pointer" onClick={HandleDrawerOpen} fontSize="medium" />}
            </Box>

            {/* switch theme */}
            <Switch color="default" onChange={switchTheme} sx={{ mr: -1 }} />

            <IconButton onClick={handleLangClick} size="small" sx={{ ml: 2 }}>
              <img src="https://www.countryflags.io/gb/flat/24.png" />
            </IconButton>



            <IconButton onClick={handleNotifClick} size="small" sx={{ ml: 2 }}>
              <Badge badgeContent={5} invisible={false} fontSize="small" color="error">
                <Notifications sx={{ width: 25, height: 22, color: 'white' }} />
              </Badge>
            </IconButton>

            <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
              <Avatar sx={{ width: 25, height: 25 }}>S</Avatar>
            </IconButton>






            {/*Languages Menu  */}
            <Menu
              anchorEl={langAnchor}
              open={openLang}
              onClose={handleLangClose}
              PaperProps={{
                elevation: 0.2
              }}
            >
              <Box sx={{ width: 150 }}>
                <MenuItem>
                  <img src="https://www.countryflags.io/gb/flat/24.png" />
                  <Typography variant="h6" sx={{ ml: 2, fontSize: '1rem', fontWeight: 300 }}>English</Typography>
                </MenuItem>
                <MenuItem>
                  <img src="https://www.countryflags.io/fr/flat/24.png" />
                  <Typography variant="h6" sx={{ ml: 2, fontSize: '1rem', fontWeight: 300 }}>French</Typography>

                </MenuItem>
              </Box>
            </Menu>

            {/* Notifications Menu */}
            <Menu
              anchorEl={notifAnchor}
              open={openNotif}
              onClose={handleCloseNotif}
              PaperProps={{
                elevation: 0.2
              }}
            >
              <Box sx={{ ml: 2, outline: 'none' }}>
                <Typography variant="h6" noWrap sx={{ fontSize: '1.2rem', fontWeight: '500' }}>Notification</Typography>
              </Box>
              <Divider />
              <List sx={{ width: 300 }}>
                <ListItem sx={{ cursor: 'pointer' }}>
                  <ListItemAvatar >
                    <Avatar color="primary" sx={{ width: 35, height: 35 }}>
                      <Payment />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Your order is placed" secondary="Dummy text" />
                </ListItem>
                <Divider />

                <ListItem sx={{ cursor: 'pointer' }}>
                  <ListItemAvatar >
                    <Avatar sx={{ width: 35, height: 35 }}>
                      <Textsms />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="New message received" secondary="Dummy text" />
                </ListItem>
                <Divider />

                <ListItem sx={{ cursor: 'pointer' }}>
                  <ListItemAvatar >
                    <Avatar sx={{ width: 35, height: 35 }}>
                      <ShoppingCart />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Your item is shipped" secondary="Dummy text" />
                </ListItem>
                <Divider />

                <ListItem sx={{ cursor: 'pointer' }}>
                  <ListItemAvatar >
                    <Avatar sx={{ width: 35, height: 35 }}>
                      <Textsms />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="New message received" secondary="Dummy text" />
                </ListItem>
                <Divider />
              </List>
              <Box display="flex" justifyContent="center">
                <Button color="primary" size="small">Mark All as read</Button>
              </Box>
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
        </AppBar>


        <Drawer open={openDrwr} onClose={HandleDrawerClose}  sx={DrawerStyle}>
          {/* this box is used to fix drawer hidden content bellow appbar */}
          <Box sx={{ ...theme.currentTheme.mixins.toolbar }} />

          {/* Logo Part */}
          <center>

          </center>

          {/* person card top drawer */}
          <Box display="flex" borderRadius={2} justifyContent="space-around" sx={{ bgcolor: theme.mode == "dark" ? "#505050" : "	#F0F0F0", margin: 2, padding: 1 }}>
            <Avatar alt="profile picture" src="https://machinecurve.com/wp-content/uploads/2019/07/thispersondoesnotexist-1-1022x1024.jpg" />
            <Box>
              <Typography variant="h6" sx={{ fontSize: '0.8rem', fontWeight: '400' }}>Jane Ronstane</Typography>
              <Typography variant="h6" sx={{ fontSize: '0.8rem', fontWeight: '400' }}>Profile : Admin</Typography>
            </Box>
          </Box>



          <Divider />
          {/* used stack here to avoid using multiple elements with margins for separation */}
          <Stack justifyContent="center" alignItems="left" spacing={1}>
            <List>
              <Typography variant="h2" sx={{ fontSize: '0.9rem', fontWeight: '500', ml: 2 }}>GENERAL</Typography>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Assessment />
                  </ListItemIcon>
                  <ListItemText primary="Overview" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PieChart />
                  </ListItemIcon>
                  <ListItemText primary="Analytics" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ShoppingBag />
                  </ListItemIcon>
                  <ListItemText primary="Finance" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  <ListItemText primary="Account" />
                </ListItemButton>
              </ListItem>
            </List>
            {/* menu with nested collapsable menu */}
            <List>
              <Typography variant="h2" sx={{ fontSize: '0.9rem', fontWeight: '500', marginLeft: 2 }}>MANAGEMENT</Typography>
              <ListItemButton onClick={handleMgmtClick}>
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <ListItemText primary="Cutomers" />
                {openMgmt ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={openMgmt} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                  <ListItemButton sx={{ pl: 10 }}>
                    <ListItemText primary="List" />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 10 }}>
                    <ListItemText primary="Details" />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 10 }}>
                    <ListItemText primary="Edit" />
                  </ListItemButton>

                </List>
              </Collapse>

              {/* second colapsable option  */}

              <ListItemButton onClick={handlePrdctClick}>
                <ListItemIcon>
                  <ShoppingCart />
                </ListItemIcon>
                <ListItemText primary="Products" />
                {openPrdct ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={openPrdct} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                  <ListItemButton sx={{ pl: 10 }}>
                    <ListItemText primary="List" />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 10 }}>
                    <ListItemText primary="Details" />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 10 }}>
                    <ListItemText primary="Create" />
                  </ListItemButton>

                </List>
              </Collapse>


            </List>
          </Stack>



        </Drawer>
      </ThemeProvider>
    </>
  )
}