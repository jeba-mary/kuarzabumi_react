import React from 'react';

function Services() {
  return (
    <div className="container">
    <section className="bg">
         <div className="container">
            <div className="row mb-3">
               <div className="col-md-12">
                  <div className="heading-block" style={{textAlign: 'center'}}>
                     <span className="text-uppercase light-weight">You can choose high quality services</span>
                     <h2 className="text-uppercase solid-weight">Our Services</h2>
                 
                  </div>
                 
               </div>
               
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="row">
                     <div className="col-sm-3 sm-mb-3">
                        <div className="feature">
                           <div className="feature-icon"> <i className="lnr"><img src={require('../images/icons/icons-01.png')} className="img-responsive" alt="" /></i> </div>
                           <div className="feature-info">
                              <h4>SALES</h4>
                              <p>We provide a wide range of options of commercial vehicle and also a custom truck body. Call us now @ +6016 222 7779 and tell us your requirement.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-sm-3 sm-mb-3">
                        <div className="feature">
                           <div className="feature-icon"> <i className="lnr"><img src={require('../images/icons/icons-02.png')} className="img-responsive" alt="" /></i> </div>
                           <div className="feature-info">
                              <h4>SERVICES</h4>
                              <p>kuarzabumi offers a complete range of maintenance services. Our mechanics have worked with a huge range of vans &amp; trucks over the years.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-sm-3">
                        <div className="feature">
                           <div className="feature-icon"> <i className="lnr"><img src={require('../images/icons/icons-03.png')} className="img-responsive" alt="" /></i></div>
                           <div className="feature-info">
                              <h4>SPARE PARTS</h4>
                              <p>We stock a wide range of spare parts for vans &amp; trucks. We aim to supply you with a part that will meet your requirements as quickly as possible.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-sm-3">
                        <div className="feature">
                           <div className="feature-icon"><i className="lnr"><img src={require('../images/icons/icons-04.png')} className="img-responsive" alt="" /></i> </div>
                           <div className="feature-info">
                              <h4>INSURANCE</h4>
                              <p>We offer a comprehensive range of general insurance solutions. We are ready to assist you with our professional advice.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}

export default Services;