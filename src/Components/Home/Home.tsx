import React from "react";
import "./home.scss";
import opa from "./Ellipse 2.svg";
import opa2 from "./story.svg";
import User from "../Users/Users";

const Home: React.FC = () => {
  return (
    <>
      <div className="hero container">
        <h3>Who we are and what we do</h3>
        <p>
          Here you can find a lot of interesting and useful information that you
          need in gardening and creating a beautiful garden
        </p>
      </div>

      <div className="text__img container">
        <div className="txt">
          <h3>Seedra helps to grow fast and efficient</h3>
          <p>
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
            professional instructions created by PhD Helga George <br />
            <br />
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings. Your easy growing experience is our guarantee.
            Spinach common culinary uses: salads, soups, smoothies, lasagne,
            pizza, pies, risotto, and more <br />
            <br />
            Proudly sourced in the USA - our garden seeds are grown, harvested,
            and packaged in the USA. We support local farmers and are happy to
            produce this American-made product.
          </p>
        </div>
        <div className="img">
          <img src={opa} alt="Illustration related to Seedra's products" />
        </div>
      </div>

      <div className="ourstory container">
        <div className="img">
          <img src={opa2} alt="Illustration depicting Seedra's story" />
        </div>
        <div className="txt">
          <h3>Our story</h3>
          <p>
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
            professional instructions created by PhD Helga George <br />
            <br />
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings. <br />
            Your easy growing experience is our guarantee. Spinach common
            culinary uses: salads, soups, smoothies, lasagne, pizza, pies,
            risotto, and more <br />
            <br />
            Proudly sourced in the USA - our garden seeds are grown, harvested,
            and packaged in the USA. We support local farmers and are happy to
            produce this American-made product.
          </p>
        </div>
      </div>
      <User />
    </>
  );
};

export default Home;
