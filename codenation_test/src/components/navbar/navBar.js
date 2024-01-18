//Styles for the footer
import './index.css'
//Hooks
import { useState } from 'react'
//Component of footer
import { NavListDrawer } from './navListDrawer'
//Material Layout of MaterialUI
import { Box } from '@mui/system'
//Material of MaterialUI
import { AppBar, Button, Drawer, IconButton, Toolbar, Typography, Modal } from '@mui/material'
//
import Swal from 'sweetalert2';
//
import code_na from "../../img/code_na.png"
//
import TextField from '@mui/material/TextField';
//
import { post } from '../../api/apiServiceLogin';
//
import { Link } from 'react-router-dom';
//Icons of MaterialUI
import PersonIcon from '@mui/icons-material/Person';
import FeedIcon from '@mui/icons-material/Feed';
import MenuIcon from "@mui/icons-material/Menu"
import HomeIcon from '@mui/icons-material/Home';



export const NavBar = ({ routes }) => {

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 400,
    bgcolor: '#ffffff',
    border: '3px solid #000',
    borderRadius: '3%',
    boxShadow: 24,
    p: 12,
  };


  //For the menu button
  const [open, setOpen] = useState(false);

  //For the modal Button 
  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  //For the login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, completa todos los campos',
      });
      return;
    }

    const loginData = {
      email,
      password,
    };

    const loginEndpoint = 'api/login';

    try {
      const response = await post(loginEndpoint, loginData);
      console.log('Respuesta de inicio de sesión:', response);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
    setEmail('');
    setPassword('');
  };

  const navLinks = [
    {
      title: "Home",
      path: "/", //Here we use react route
      icon: <HomeIcon />
    },

    {
      title: "Articles",
      path: "/articles",
      icon: <FeedIcon />

    },

    {
      title: "Login",
      onClick: handleOpenLogin,
      icon: <PersonIcon />
    }
  ]

  return (
    <>
      <AppBar
        position='static'
        sx={{ backgroundColor: '#41464b' }}
      >
        <Toolbar>
          <Typography
            variant='h6'
            className='text-codenation'
          >
            CodeNation Studio
          </Typography>
          <IconButton
            color='inherit'
            size='large'
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box className='box-list-device'>
            {
              navLinks.map(item => (
                <Button
                  size="large"
                  color='inherit'
                  key={item.title}
                  component={Link} // Use the component link of rect dom
                  to={item.path} // set up the path to where browse in the pages
                  onClick={item.onClick}
                  className=''
                >
                  {item.icon}{item.title}
                </Button>
              ))
            }
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor='right'
        onClose={() => setOpen(false)}
      >
        <NavListDrawer navLinks={navLinks} />
      </Drawer>

      <Box>
        <Modal
          open={openLogin}
          onClose={handleCloseLogin}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          disableAutoFocus // Add disableAutoFocus here
        >
          <Box sx={modalStyle}>
            <Box>
              <div className='img-container-logo '>
                <img
                  src={code_na}
                  width="150"
                  alt="Logo Codenation"
                />
              </div>
            </Box>
            <br />
            <form onSubmit={handleSubmit}>
              <Typography variant="h6" component="h2">
                Iniciar Sesión
              </Typography>
              <br />
              <TextField
                id="email"
                label="Correo Electrónico"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
              />
              <br />
              <br />
              <TextField
                id="password"
                type="password"
                label="Contraseña"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
              />
              <br />
              <br />
              <Button variant="contained" type="submit" color="primary">
                Iniciar Sesión
              </Button>
            </form>
          </Box>
        </Modal>
      </Box>
    </>
  );
}
