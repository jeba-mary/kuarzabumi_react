import React from 'react';
import { Link } from 'react-router-dom';

function Content () {
  return(
    <section className="p-0 automobile aboutcontent">
         <div className="container">
            <h2 className="text-uppercase">Welcome to  Kuarzabumi</h2>
            <h4 className="text-uppercase">Exclusive GoAuto Dealer</h4>
            <div className="row row-eq-height sm-row-eq-height no-gutter">
               <div className="col-md-3 col-lg-3">
                  <div className="py-5 px-7 sm-pxy-3 white-text">
                     <div className="feature icon-position-left">
                        <div className="opening_time">
                           <Link to="#interior"><img src={require('../images/brand/img1.jpg')} className="img-responsive" alt="" /></Link>
                        </div>
                     </div>
                     <div className="feature-info" >
                        <h4 className="text-uppercase">INTERIOR</h4>
                     </div>
                  </div>
               </div>
               <div className="col-md-3 col-lg-3" >
                  <div className="py-5 px-7 sm-pxy-3">
                     <div className="feature icon-position-left white-text">
                        <div className="opening_time">
                           <Link to="exterior"><img src={require('../images/brand/img2.jpg')} className="img-responsive" alt="" /></Link>

                        </div>
                     </div>
                     <div className="feature-info">
                        <h4 className="text-uppercase">EXTERIOR</h4>
                     </div>
                  </div>
               </div>
               <div className="col-md-3 col-lg-3">
                  <div className="py-5 px-7 sm-pxy-3 white-text">
                     <div className="feature icon-position-left">
                        <div className="opening_time">
                           <Link to="#safety"><img src={require('../images/brand/img3.jpg')} className="img-responsive" alt="" /></Link>

                        </div>
                     </div>
                     <div className="feature-info">
                        <h4 className="text-uppercase">SAFETY</h4>
                     </div>
                  </div>
               </div>
               <div className="col-md-3 col-lg-3" >
                  <div className="py-5 px-7 sm-pxy-3">
                     <div className="feature icon-position-left white-text">
                        <div className="opening_time">
                           <Link to="gallery"><img src={require('../images/brand/img4.jpg')} className="img-responsive" alt="" /></Link>
                        </div>
                     </div>
                     <div className="feature-info">
                        <h4 className="text-uppercase">GALLERY</h4>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      
      </section>
  )
}

export default Content;