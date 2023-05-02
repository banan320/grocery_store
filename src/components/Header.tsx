import * as React from 'react';
import { AppBar,Box,Menu,Button,MenuItem, IconButton, Toolbar, Typography, Tooltip,Avatar,Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import ModalCommon from './ModalCommon';
import logo from "../img/dr_logo.png"


const pages = ['Меню', 'Каллорийность', 'Доставка','Акции', ];
const settings = ['Адреса', 'Отзывы', 'Вакансии'];

const sxStyles = {
  header: {
    backgroundColor:"#fff",
    boxShadow:"none",
    color:"#000",

  },
  button:{
      color:"#000",
      my: 2, 
      display: 'block',
      fontSize: "12px",
      fontWeight: "700",
  drop: {
      display:"flex",
      color:"#000",
      fontSize: "12px",
      fontWeight: "700",

    }
  },
  logo: {
    width:"70px",
    height:"auto"
  },
  icons: {
    width:"17px" ,
    color:"#ABABAB",
  },
  p: {
    fontSize:"17px",
    padding: "0 10px 0 7px",
    textDecoration:"none",
    color:"#000",
     hover: {
      fontSize:"17px",
      padding: "0 10px 0 7px",
      textDecoration:"none",
      color:"#000",
      "&:hover": {
        color: "#f9a430",
      }
      }
  },
  typography: {
    div: {
      fontSize: "17px"
    }
  },
  link: {
    textDecoration:"none",
    color:"#000",
    fontSize: "12px",
    fontWeight: "700",
    textTransform:"uppercase",
    letterSpacing: ".5px",
  },
  basket: {
    borderRadius:"100px",
    backgroundColor:"#F9A430",
    width: "40px",
    height: "40px",
    fontSize: "17px",
    textDecoration:"none",
    display:"inline-block",
    ml:"5px",
    textAlign:"center",
    lineHeight: "2.4",
  }
}



const Header = () => {
  const [open, setOpen] = React.useState<boolean>(false);


  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
   
    <AppBar position="static" sx={sxStyles.header}>
        <Toolbar disableGutters>
          <Tooltip title="Логотип">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            <Avatar sx={sxStyles.logo} src={logo}>
            </Avatar>
          </Typography>
          </Tooltip>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },
        }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} 
                {settings.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={sxStyles.button}
              >
                {page}
              </Button>
            ))}
              <Button  onMouseEnter={handleOpenUserMenu}
                sx={sxStyles.button.drop}
              >О нас
              <IconButton   sx={{ p: 0, color:"inherit",  }}>
              <KeyboardArrowDownIcon/>
              </IconButton>
              </Button>
              <Box>
            <Menu 
              sx={{ mt: '33px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}

            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography fontSize="12px" textTransform="uppercase" textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            </Box>
          </Box>


      <Box  sx={{ flexGrow:1, display:"flex", flexDirection:"column", alignItems:"start", justifyContent:"center",  }}>
        <Typography  component="div" sx={sxStyles.typography.div} >
        Предзаказ на самовынос <ModalCommon  setOpen={setOpen} open={open} />

        </Typography>

        <Typography component="div" sx={{  display:"flex",  alignItems:"center",   }}>
        <AccessTimeIcon sx={sxStyles.icons}/>
        <Typography component="p" sx={sxStyles.p}>
         10:00 - 22:00 
        </Typography>

        <PhoneInTalkOutlinedIcon sx={sxStyles.icons}/>
        <Link href="tel: 8 861 220-55-99"  sx={sxStyles.p.hover}>
        8 861 220-55-99
        </Link>
        </Typography>

      </Box>
      
      <Box>
        <Link href="#" sx={sxStyles.link}>
          Корзина
            <Typography component="span" sx={sxStyles.basket}>0</Typography>
        </Link>
      </Box>
        </Toolbar>
    </AppBar>

  );
};

export default Header;