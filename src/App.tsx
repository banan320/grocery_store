import './App.css'
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Header from './Header';
import Drawer from './Drawer';



const styled ={
  display:"flex",
  justifyContent:"flex-start",
  backgroundColor:"red",
  color:"red"
}

const App = () => {
  return (
    <div className={styled}>
      <Header />
      {/* <Button  variant='contained'>Hello world!</Button> */}
      <Drawer />
      </div>
  );
};

export default App;