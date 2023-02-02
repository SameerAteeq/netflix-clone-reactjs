import React from "react";
import CommonNav from "../common/CommonNav";
import Separator from "../common/Separate";
import Footer from "../footer";
import HeroBanner from "./heroBanner";
import PopularMovies from "./popular";
import Trending from "./trending";
import UpcomingMovies from "./upcoming";

const Home2 = () => {
  return (
    <div>
      <HeroBanner />
      <Trending />
      <UpcomingMovies />
      <PopularMovies />
      <Separator />
      <Footer />
    </div>
  );
};

export default Home2;
