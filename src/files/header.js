import React from "react"
    // function mobileclick(){
    //     "search-div"
    // }

    function  Header() {
        return(
            <div className="header_div">
                
                <div className="header_sub_div">
                 <h2>MARKET</h2>
                </div>
                <div className="header_sub_div2">
                    <ul>
                        <li>Explore</li>
                        <li>Marketplace</li>
                        <li>Artist</li>
                        <li>collection</li>
                    </ul>
                </div>
                <div className="search_div">
                    <input type="search"  placeholder="Search"/>
                    <i className="fas fa-search"></i>
                </div>
                <button className="signin-button">Sign in</button>
                {/* <img src="./img/hotdeals/vector.png"  /> */}
            </div>
        )
    }
export default Header