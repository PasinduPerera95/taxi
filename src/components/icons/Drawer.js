import React from "react";
import clsx from "clsx";
import MoreIcon from "@material-ui/icons/MoreVert";
import { fade } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Triphis from "../triphis/Triphis";
import Badge from "@material-ui/core/Badge";
import PkgAssign from "../PkgAssign/PkgAssign";
import NotificationsIcon from "@material-ui/icons/Notifications";
////////////////////////////////////
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import TimelineIcon from "@material-ui/icons/Timeline";
import HomeIcon from '@material-ui/icons/Home';
import NetworkCheckIcon from "@material-ui/icons/NetworkCheck";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import FaceIcon from "@material-ui/icons/Face";
import { BrowserRouter as Router, Switch, Route ,Link } from "react-router-dom";
import  Customer  from "../customer/Customer";
import Vehicle from "../vehicle/Vehicle";
import Driver from "../driver/Driver";
import Pkg from "../pkgdetail/Pkg";
import Vtype from "../vtype/Vtype";
import Ftrips from "../ftrips/Ftrips";
import Dricom from "../dricom/Dricom";
import Vford from "../vford/Vford";
import  Vtyview  from "../VtyView/VtyView";
//import Dprofile from "../driver/Dprofile";

//search
import SearchField from "react-search-field";

//components goes here...
import Contracts from '../Contacts';
import Dprofile from "../driver/Dprofile";
import Home from "../home/Home";
//import { Home } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  link:{
     textDecoration :'none',
     color: theme.palette.text.primary
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft({ handleLogout }) {
    //const { classes } = this.props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const menuId = "primary-search-account-menu";
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Respct-cab (dev stage)
          </Typography>
          <Typography
            variant="h6"
            className={classes.title}
            noWrap
          ></Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            {/* <SearchField
              placeholder="Search..."
              //
              searchText="This is initial search text"
            /> */}
          </div>
          {/*  */}
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              //onClick={handleProfileMenuOpen}
              onClick={handleLogout}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
          {/*  */}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        {/* <List>
          {["Home", "Customer", "Driver", "Vehicle","Trips"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        <List>
          <Link to="/h" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to="/Driver" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <NetworkCheckIcon />
              </ListItemIcon>
              <ListItemText primary={"Driver"} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to="/vehicle" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <DriveEtaIcon />
              </ListItemIcon>
              <ListItemText primary={"Vehicle"} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to="/customer" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <FaceIcon />
              </ListItemIcon>
              <ListItemText primary={"Customer"} />
            </ListItem>
          </Link>
        </List>
        {/* 
        Vehicle For Drivers
        Vehicle Type view
        Existing Packages
        Assign Packages
        */}
        <List>
          <Link to="/vford" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <EmojiTransportationIcon />
              </ListItemIcon>
              <ListItemText primary={"Vehicle For Drivers"} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to="/vtyview" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <AirportShuttleIcon />
              </ListItemIcon>
              <ListItemText primary={" Vehicle Type view"} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to="/pkg" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <AccountBalanceWalletIcon />
              </ListItemIcon>
              <ListItemText primary={"Existing Packages"} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to="/pkgas" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <AccountBalanceWalletIcon />
              </ListItemIcon>
              <ListItemText primary={"Assign Packages"} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        {/* <List>
          {["Trip history", "Failed Trips", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        <List>
          <Link to="/history" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <TimelineIcon />
              </ListItemIcon>
              <ListItemText primary={"Trip History"} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to="/ftrips" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Failed trips"} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to="/dricom" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Driver Commission"} />
            </ListItem>
          </Link>
        </List>
        {/* 
        Deriver Commission

        */}
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
          {/* <PkgAssign /> */}
          {/* <Router>
            <Route path="/customer" component={Customer} />
          </Router>
          <Router>
            <Route path="/vehicle" component={Vehicle} />
          </Router> */}
          <Switch>
             <Route path="/h">
              <Home />
            </Route>
            <Route path="/customer">
              <Customer />
            </Route>
            <Route path="/Vehicle">
              <Vehicle />
            </Route>
            <Route path="/driver">
              <Driver />
            </Route>
            <Route path="/history">
              <Triphis />
            </Route>
            <Route path="/pkgas">
              <PkgAssign />
            </Route>
            <Route path="/pkg">
              <Pkg />
            </Route>
            <Route path="/vtype">
              <Vtype />
            </Route>
            <Route path="/ftrips">
              <Ftrips />
            </Route>
            <Route path="/dricom">
              <Dricom />
            </Route>
            <Route path="/vford">
              <Vford />
            </Route>
            <Route path="/dprof">
              <Dprofile />
            </Route>
            <Route path="/vtyview">
              <Vtyview />
            </Route>
          </Switch>
        </Typography>
        <Typography paragraph></Typography>
      </main>
    </div>
  );
}
