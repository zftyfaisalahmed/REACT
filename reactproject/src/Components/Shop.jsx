import React from "react";

function Shop(){
    return(
        <div class="section cta">
            <div class="container">
                <div class="row">
                <div class="col-lg-5">
                    <div class="shop">
                        <div class="row">
                            <div class="col-lg-12">
                            <div class="section-heading">
                                <h6>Our Shop</h6>
                                <h2>Go Pre-Order Buy & Get Best <em>Prices</em> For You!</h2>
                            </div>
                            <p className="space">Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.</p>
                            <div class="main-button">
                                <a className="btn btn-outline-secondary" href="http://localhost:3000/">Shop Now</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div></div> */}
                <div class="col-lg-5 offset-lg-2 align-self-end metro">
                    <div class="subscribe">
                    <div class="row">
                        <div class="col-lg-12">
                        <div class="section-heading">
                            <h6>NEWSLETTER</h6>
                            <h2>Get Up To $100 Off Just Buy <em>Subscribe</em> Newsletter!</h2>
                        </div>
                        <div class="search-input">
                            <form id="subscribe" action="#">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email..." />
                            <button type="submit">Subscribe Now</button>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Shop