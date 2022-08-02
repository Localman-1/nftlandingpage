import React from "react";
function Creator() {
  return (
    <div className="creator-container">
      <h5>Be An NFT Creator</h5>
      <h2>Create & sell your NFT</h2>
      <div className="creatorMap">
        {creatorText.map((item) => (
          <div className="creatorMap-Wrap" key={item.key}>
            <img src="./img/hotdeals/image-removebg-preview (14) 1.png" />
            <p>{item.topic}</p>
            <h6>{item.text}</h6>
          </div>
        ))}
      </div>
      <div className="create-button-wrap">
        <button className="create-button">Create Now</button>
        <button className="watch-button">Watch Video</button>
      </div>
      <h5>NFT Creators</h5>
      <h2>Top Creators of the Week</h2>
      <div className="top-creator-wrap">
        {topCreator.map((item) => (
          <div key={item.key} className="top-creator-sub-wrap">
            <div className="topCreatorImg">
              <img src={item.img} alt={item.alt}  />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export const creatorText = [
  {
    key: 1,
    topic: "Create Art Work",
    text: "Create your collection, add social links, profile & banner images, and set asecondary sales fee",
  },
  {
    key: 2,
    topic: "Upload",
    text: "Upload your work, customize your NFTs with properties, stats, and unlockable content.",
  },
  {
    key: 3,
    topic: "Listing",
    text: "Set up and choose between auction, fixed-price listings, and declining-price listings",
  },
];
export const topCreator = [
  {
    key: 1,
    alt:"image",
    img: "./img/hotdeals/frame 27.png",
  },
  {
    key: 2,
    alt:"image",
    img: "./img/hotdeals/frame 27.png",
  },
  {
    key: 3,
    alt:"image",
    img: "./img/hotdeals/frame 27.png",
  },
  {
    key: 4,
    alt:"image",
    img: "./img/hotdeals/frame 27.png",
  },
  {
    key: 5,
    alt:"image",
    img: "./img/hotdeals/frame 27.png",
  },
  {
    key: 6,
    alt:"image",
    img: "./img/hotdeals/frame 27.png",
  },
];
export default Creator;
