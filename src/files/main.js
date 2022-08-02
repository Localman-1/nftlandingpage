import React from "react";
import Hotdrop from "../files/hotDrops"
import Creator from "../files/creator"
import Community from "./community";
function Main() {
  return (
    <div className="main_div">
      <div className="main_sub_div1">
        <div>
          <h1>
            Discover, Sell <br /> & Collect Rare NFTs
          </h1>
          <h5>
            Digital marketplace for crypto collections and <br /> non-fungible
            tokens (NFTs)
          </h5>
          <button>Discover Now</button>
          <div className="artworks_div">
            <div>
              <h2>35k +</h2>
              <h5>Artworks</h5>
            </div>
            <div>
              <h2>15k +</h2>
              <h5>Auntions</h5>
            </div>
            <div>
              <h2>25k +</h2>
              <h5>Artist</h5>
            </div>
          </div>
        </div>
        <div>
          <img src="./img/Frame 2.svg" />
        </div>
      </div>
      <div className="main_first_img_div">
        <img src="./img/image-removebg-preview (6).svg" alt="up" />
        <img src="./img/image-removebg-preview (7) 1.svg" alt="down" />
        <img src="./img/image-removebg-preview (12) 1.svg" alt="left" />
        <img src="./img/image-removebg-preview (13) 1.svg" alt="right" />
      </div>
      <Hotdrop />
      <Creator />
      <Community />
    </div>
  );
}
export default Main;
