import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { ShoppingBasket} from "@mui/icons-material"

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
      <Typography variant='h4'component="div" >Shop</Typography>
<IconButton>
  <ShoppingBasket/>
</IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;