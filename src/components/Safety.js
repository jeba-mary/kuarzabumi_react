import React from 'react';
import {Link} from 'react-router-dom';

function Safety() {
  return(
      <section className="p-0 pos-r interior desktopservices" id="safety">
         <div className="container">
            <div className="row">
               <br/>
               <h2 className="text-uppercase">
                  <label className="theme-text">Safety</label>
               </h2>
               <div className="tabbable tabs-left">
                  <ul className="nav nav-tabs">
                     <li className="active"><Link to="#sensor" data-toggle="tab"><i className="fa fa-plus" aria-hidden="true"></i> Wide angle sensor</Link></li>
                     <li><Link to="#ebd" data-toggle="tab"><i className="fa fa-plus" aria-hidden="true"></i> ABS + EBD</Link></li>
                     
                  </ul>
                  <div className="tab-content">
                     <div className="tab-pane active" id="sensor">
                        <div className="">
                           <img src={require('../images/portfolio/img9.jpg')} className="img-responsive" alt="" />               
                        </div>
                     </div>
                     <div className="tab-pane" id="ebd"> 
                        <img src={require('../images/portfolio/img10.jpg')} className="img-responsive" alt="" /> 
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
  )
}

export default Safety;