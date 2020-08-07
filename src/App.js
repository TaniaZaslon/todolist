import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ToDoList from "./components/todolist.component";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">TZaslon</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="mt-5">
        <div className="app-block">
          <h1 className="text-center mb-4">ToDO List App</h1>
          <ToDoList />
        </div>
      </Container>
    </div>
  );
}

export default App;
