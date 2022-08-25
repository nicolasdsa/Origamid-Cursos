import React from "react";
import Header from "./header/Header";
import Home from "./home/Home";
import Produtos from "./produtos/Produtos";
import "./App.css";
const App = () => {
  const { pathname } = window.location;

  /* Poderia ser feito assim ao em vez de ter usado operador ternario
  let Component;
  if (pathname === '/produtos') {
    Component = Produtos;
  } else {
    Component = Home;
  }*/

  return (
    <div>
      <Header />
      {pathname === "/" ? <Home /> : <Produtos />};
    </div>
  );
};

export default App;
