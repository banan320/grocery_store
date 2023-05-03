import "./App.css";
import Header from "../components/Header";
import { Container } from "@mui/material";

const App = () => {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Header />
      </Container>
    </div>
  );
};

export default App;
