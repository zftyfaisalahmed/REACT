import React from "react";

function Home(){
    return(
        <div class="main-banner">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 align-self-center p-3">
              <div class="caption header-text">
                <h6 className="text-white cap">Welcome to Sukuna World</h6>
                <h2 className="text-white capp">BEST GAMING SITE EVER!</h2>
                <p className="text-white cappp">Gaming is a fun and stimulating activity that can be played alone or with others. It can be played on a video game console, PC, or mobile device.</p>
                <div class="search-input">
                  <form id="search" class="d-flex col-lg-12 from"  action="#">
                    <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" className="form-control me-2 form" />
                    <button className="button text-white">Search</button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-4 offset-lg-2">
              <div class="right-image">
                <img src="https://w0.peakpx.com/wallpaper/309/233/HD-wallpaper-monkey-d-luffy-mugivara-luffy-strawhat-luffy-king-of-pirates-one-piece-anime.jpg" alt="" className="suk"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home;