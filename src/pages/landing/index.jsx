import React from "react";
import Menu, { MiniMenu } from "../../components/Menu";
import Header from "../../components/Header";
import Experience from './Experience'

const Landing = () => {
  return (
    <div>
      <Menu />
      <MiniMenu />
      <Header />
      <Experience />
    </div>
  );
};

export default Landing;
