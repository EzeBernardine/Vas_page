import React from "react";
import Menu, { MiniMenu } from "../../components/Menu";
import Header from "../../components/Header";
import JoyExperience from "./Joys_Experience";
import JosaihExperience from "./Josiahs_Experience";
import Card from "./Cards";
import { experienceCards } from "./data_1experience";
import { experienceCards2 } from "./data_2experience";
import Footer, {MiniFooter} from '../../components/Footer'

const Landing = () => {
  return (
    <div>
      <Menu />
      <MiniMenu />
      <Header />
      <JoyExperience />
      <Card experienceCards={experienceCards} />
      <JosaihExperience />
      <Card experienceCards={experienceCards2} />
      <MiniFooter />
      <Footer />
    </div>
  );
};

export default Landing;
