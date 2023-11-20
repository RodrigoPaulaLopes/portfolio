import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Container from "./components/Container/Container";
import Content from "./components/Content";
import Menu from "./components/Menu";
import { BrowserRouter as Router } from "react-router-dom";
import { Rotas } from "./routes";
function App() {
  return (
    <Router>
      <Container>
        <Content>
          <Menu />
          <Rotas />
        </Content>
      </Container>
    </Router>
  );
}

export default App;
