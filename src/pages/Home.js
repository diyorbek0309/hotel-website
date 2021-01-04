import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Hashamatli xonalar"
          subtitle="Lyuks xonalar kuniga 300 000 so'mdan"
        >
          <Link to="/rooms" className="btn-primary">
            Bizning xonalar
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default home;
