import React from "react";
import Separator from "../common/Separate";
import Footer from "../footer";
import Navbar from "../Navbar";
import FAQ from "./Accordion";
import Jumbo from "./jumbo";

const Home = () => {
  return (
    <div style={{ background: "black" }}>
      <Navbar />
      <Separator />
      <Jumbo />
      {/* <Separator /> */}
      <FAQ />
      <Separator />
      <Footer />
    </div>
  );
};

export default Home;
