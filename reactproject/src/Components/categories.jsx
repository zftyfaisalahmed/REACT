import React from "react";

function Categ(){
    return(
        <div class="section categories">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="section-heading">
                <h6 className="catt">Categories</h6>
                <h2>Top Categories</h2>
              </div>
            </div>
            <div class="col-lg col-sm-6 col-xs-12">
              <div class="item">
                <h4>Minato</h4>
                <div class="thumb">
                  <a href="product-details.html"><img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTbh5fOjdtZqTrwIgGIz6gRHnCTfXdg91tIVr5YC5dV_sncXbKh" alt=""  style={{maxHeight: 200}}/></a>
                </div>
              </div>
            </div>
            <div class="col-lg col-sm-6 col-xs-12">
              <div class="item">
                <h4>Sasake</h4>
                <div class="thumb">
                  <a href="product-details.html"><img src="https://pbs.twimg.com/media/FrugSEOWcAEYULg?format=jpg&name=medium" alt="" style={{maxHeight: 200}}/></a>
                </div>
              </div>
            </div>
            <div class="col-lg col-sm-6 col-xs-12">
              <div class="item">
                <h4>Gojo</h4>
                <div class="thumb">
                  <a href="product-details.html"><img src="https://i.pinimg.com/736x/49/d5/b2/49d5b215b12847a876d5e888a9c5b5c5.jpg" alt="" style={{maxHeight: 200}}/></a>
                </div>
              </div>
            </div>
            <div class="col-lg col-sm-6 col-xs-12">
              <div class="item">
                <h4>Hancock</h4>
                <div class="thumb">
                  <a href="product-details.html"><img src="https://i.pinimg.com/564x/33/ed/d3/33edd3c87c7f9ded037fbb8f4f77deba.jpg" alt="" style={{maxHeight: 200}}/></a>
                </div>
              </div>
            </div>
            <div class="col-lg col-sm-6 col-xs-12" >
              <div class="item">
                <h4>Robin</h4>
                <div class="thumb">
                  <a href="product-details.html"><img src="https://i.pinimg.com/736x/30/27/87/3027877470647351f797c2268fab663b.jpg" alt="" style={{maxHeight: 200}} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Categ