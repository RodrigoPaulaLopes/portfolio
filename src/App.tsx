import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Container from "./components/Container/Container";
import Content from "./components/Content";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Sobre from "./pages/Sobre";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Content>
        <Menu />
        <Home />
      </Content>
    </Container>
  );
}

export default App;
