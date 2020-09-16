import React from 'react';
import { Link } from 'react-router-dom';

function InteriorContent () {
  return (
    <section className="p-0 pos-r interior desktopservices" id="interior">
         <div className="container">
            <div className="row">
               <h2 className="text-uppercase">
                  <label className="theme-text">INTERIOR</label>
               </h2>
               <div className="tabbable tabs-left">
                  <ul className="nav nav-tabs">
                     
                     <li className="active"><Link to="" data-toggle="tab"><i className="fa fa-plus" aria-hidden="true"></i> Ergonomically spaced</Link></li>
                     <li><Link to="/" data-toggle="tab"><i className="fa fa-plus" aria-hidden="true"></i> Spacious luggage area</Link> </li>
                     <li><Link to="/" data-toggle="tab"><i className="fa fa-plus" aria-hidden="true"></i> Middle console box</Link> </li>
                     <li><Link to="/" data-toggle="tab"><i className="fa fa-plus" aria-hidden="true"></i> Spacious head room</Link> </li>
                     <li><Link to="/" data-toggle="tab"><i className="fa fa-plus" aria-hidden="true"></i> Multi-compartment console</Link> </li>

                  </ul>
                  <div className="tab-content">
                     <div className="tab-pane active" id="spaced">
                        <div className="">
                           <img src={require('../images/portfolio/img1.jpg')} className="img-responsive" alt="" />            
                        </div>
                     </div>
                     <div className="tab-pane" id="area"> 
                        <img src={require('../images/portfolio/img2.jpg')} className="img-responsive" alt="" /> 
                     </div>
                     <div className="tab-pane" id="box"> 
                        <img src={require('../images/portfolio/img3.jpg')} className="img-responsive" alt="" /> 
                     </div>
                     <div className="tab-pane" id="room"> 
                        <img src={require('../images/portfolio/img4.jpg')} className="img-responsive" alt="" /> 
                     </div>
                     <div className="tab-pane" id="console"> 
                        <img src={require('../images/portfolio/img5.jpg')} className="img-responsive" alt="" /> 
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
  );
}

export default InteriorContent;