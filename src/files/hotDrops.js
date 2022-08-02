import React from "react";
function Hotdrop(props) {
    
  return (
    <div className="other-drops-div">
      <h2>NFT Marketplace</h2>
      <h5>Super Hot Drops</h5>
      <div className="deals-botton-wrap">
        {dropsData.map((item) =>
        <button className="dealsdrop-button" key={item.key}>{item.name}</button>)}   
      </div>
      <div className="hotdeals_wrap">
          {dropsDataImg.map((item)=><img className="hotdeals-wrapimg" src={item.img} key={item.key}/>)}
          
      </div>
      <button className="dealsdrop-button">View more</button>
    </div>
  );
}
export const dropsData = [
    {
        key : "1",
        name : "music"
    },
    {
        key : "2",
        name : "Art"
    },
    {
        key : "3",
        name : "sports"
    },
    {
        key : "4",
        name : "photography"
    },
    {
        key : "5",
        name : "virtual reality"
    },
    {
        key : "6",
        name : "video"
    },
    {
        key : "7",
        name : "More"
    }
    
];
export const dropsDataImg = [
    {
        key : 1,
        img : "./img/hotdeals/frame 12.png"
    },
    {
        key : 2,
        img : "./img/hotdeals/frame 13.png"
    },
    {
        key : 3,
        img : "./img/hotdeals/frame 15.png"
    },
    {
        key : 4,
        img : "./img/hotdeals/frame 14.png"
    },
    {
        key : 5,
        img : "./img/hotdeals/frame 15.png"
    },
    {
        key : 6,
        img : "./img/hotdeals/frame 16.png"
    },
]

export default Hotdrop;



