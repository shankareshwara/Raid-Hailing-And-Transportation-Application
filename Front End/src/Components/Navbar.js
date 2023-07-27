import * as React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { FaUser, FaMoneyBillTrendUp, FaBookBookmark } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Sidebar from "./Sidebar"
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Swal from "sweetalert2";
import { deleteUser,deleteUserDetails, deleteUserEmails, deleteDriver,deleteDriverDetails, deleteDriverEmails, deleteRideDetails, deleteBookDriver , deleterRequestDriver, deleteRequest} from "./Stores/MasterSlice";
import '../Styles/navbar.css'

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff5f79",
    },
    secondary: {
      main: "#ff5f79",
    },
  },
});

function Navbar() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.master);
  const { drivers } = useSelector((state) => state.master);
  const {request} = useSelector ((state) => state.master);

  console.log("driver",drivers);
  console.log(drivers.length);

  console.log("users", users);
  console.log("users", users.length);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    
    setAnchorElUser(event.currentTarget)
   
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [anchorElUser1, setAnchorElUser1] = React.useState(null);

  const handleOpenUserMenu1 = (event) => {
    
    setAnchorElUser1(event.currentTarget)
   
  };

  const handleCloseUserMenu1 = () => {
    setAnchorElUser1(null);
  };

  const eventLogout = () => {
    let timerInterval;
    Swal.fire({
      title: "Successfully LoggedOut !",
      html: "Redirecting in <b></b> milliseconds.",
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => { 
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
    setTimeout(() => {
        dispatch(deleteUser());
        dispatch(deleteUserDetails());
        dispatch(deleteUserEmails());
        dispatch(deleteRideDetails());
        dispatch(deleteRequest());
        // dispatch(deleteBookedDriver());
        console.log(users.length);
        navigate("/");
      }, 3000);
    };
    console.log(request);



  const eventLogout1 = () => {
    let timerInterval;
    Swal.fire({
      title: "Successfully LoggedOut !",
      html: "Redirecting in <b></b> milliseconds.",
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
    setTimeout(() => {
        dispatch(deleteDriver());
        dispatch(deleteDriverDetails());
        dispatch(deleteDriverEmails());
        dispatch(deleteBookDriver());
          dispatch(deleteRideDetails());
            dispatch(deleterRequestDriver());
        console.log("hello")
      navigate("/");
    }, 3000);
  };


  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Sidebar color="secondary" />
              <Typography
                variant="h3"
                noWrap
                component="a"
                href="/"
                sx={{
                  ml: 2,
                  fontSize: 30,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                CabVibe
              </Typography>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 1,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Cab Vibe
              </Typography>
              <Box
                sx={{
                  ml: 6,
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                }}
                style={{ display: "flex", flexDirection: "row-reverse" }}
              ></Box>
                <Box sx={{ flexGrow: 0 }}>
               {users.length !== 0 ? ( 
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu1} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        // src={ && user.picture}
                      />
                    </IconButton>
                  </Tooltip>
                ):(null)}  
                   {users.length !== 0 ? (
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl1={anchorElUser1}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser1)}
                    onClose={handleCloseUserMenu1}
                  >
                    <MenuItem key="profile" onClick={handleCloseUserMenu1}>
                      <FaUser />
                      <Link
                        to="/profile"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          marginLeft: "25px",
                        }}
                      >
                        <Typography textAlign="center">Profile1</Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem
                      key="payment-history"
                      onClick={handleCloseUserMenu1}
                    >
                      <FaMoneyBillTrendUp />
                      <Link
                        to="/map"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          marginLeft: "25px",
                        }}
                      >
                        <Typography textAlign="center">
                          Dashboard1
                        </Typography>
                      </Link>
                    </MenuItem>
                    {request === "ride details" ? (
                      <MenuItem
                      key="payment-history"
                      onClick={handleCloseUserMenu1}
                    >
                      <FaMoneyBillTrendUp />
                      <Link
                        to="/details"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          marginLeft: "25px",
                        }}
                      >
                        <Typography textAlign="center">
                          Ride Details
                        </Typography>
                      </Link>
                    </MenuItem>
                    ):(
                      <div>
                      { request === "end" ? (
                         <MenuItem
                         key="payment-history"
                         onClick={handleCloseUserMenu1}
                       >
                         <FaMoneyBillTrendUp />
                         <Link
                           to="/rating"
                           style={{
                             textDecoration: "none",
                             color: "black",
                             marginLeft: "25px",
                           }}
                         >
                           <Typography textAlign="center">
                             Rating
                           </Typography>
                         </Link>
                       </MenuItem>
                      ):(null)}
                      </div>
                    )
                    }
                    <MenuItem
                      key="logout"
                      onClick={eventLogout}
                      style={{
                        textDecoration: "none",
                        color: "black",
                        marginLeft: "2px",
                      }}
                    >
                      <br></br>
                      <LuLogOut style={{ marginRight: "25px" }} onClick={eventLogout}/>
                      <Typography textAlign="center"  onClick={eventLogout}>Logout1</Typography>
                    </MenuItem>
                  </Menu>
                   ):(null)}
                </Box>
          
                <Button
                  key="Login"
                  sx={{ display: "block", fontFamily: "Baskervville', serif" }}
                  style={{backgroundColor:"gray"}}
                  color="secondary"
                  variant="contained"
                  onClick={() => navigate("/signin")}
                >
                  Login
                </Button>
                <Box sx={{ flexGrow: 0 }}>
                       {drivers.length !== 0 ? (  
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        // src={ && user.picture}
                      />
                    </IconButton>
                  </Tooltip>
                       ):(null)} 
                   {drivers.length !== 0 ? (    
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem key="profile" onClick={handleCloseUserMenu}>
                      <FaUser />
                      <Link
                        to="/profile1"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          marginLeft: "25px",
                        }}
                      >
                        <Typography textAlign="center">Profile</Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem
                      key="payment-history"
                      onClick={handleCloseUserMenu}
                    >
                      <FaMoneyBillTrendUp />
                      <Link
                        to="/map2"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          marginLeft: "25px",
                        }}
                      >
                        <Typography textAlign="center">
                          Dashboard
                        </Typography>
                      </Link>
                    </MenuItem>
                    
                    <MenuItem
                      key="logout"
                      onClick={eventLogout1}
                      style={{
                        textDecoration: "none",
                        color: "black",
                        marginLeft: "2px",
                      }}
                    >
                      <LuLogOut style={{ marginRight: "25px" }} onClick={eventLogout1}/>
                      <Typography textAlign="center"  onClick={eventLogout1}>Logout</Typography>
                    </MenuItem>
                  </Menu>
                   ):(null)} 
                </Box>
               {/* ):(null)} */}
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
}
export default Navbar;