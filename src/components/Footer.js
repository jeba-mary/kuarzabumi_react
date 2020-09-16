import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-dark">
         <div className="footer-top">
            <div className="container">
               <div className="row">
                  <div className="col-sm-3 col-xs-6 col-xx-12 mb-4">
                     <h6 className="text-uppercase">Contact Us</h6>
                     <ul className="list-unstyled address">
                        <li><i className="lnr lnr-map-marker"></i><span>No.26B, Jalan Astana 1C,
                           Bandar Bukit Raja,
                           41050 Klang, Selangor.</span>
                        </li>
                        <li><i className="lnr lnr-envelope"></i><Link to="mailto:dave@kuarzabumi.my">enquiry@kuarzabumi.my</Link></li>
                        <li><i className="lnr lnr-phone-handset"></i><span>+6016 222 7779</span></li>
                     </ul>
                  </div>
                  <div className="col-sm-9 col-xs-6 col-xx-12 mb-4">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0307939151066!2d101.45091831475717!3d3.0864558977524474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc53979fe48c15%3A0x41032e925b7d5699!2s26%2C+Jalan+Astana+1C%2C+41050+Shah+Alam%2C+Selangor%2C+Malaysia!5e0!3m2!1sen!2sin!4v1553260236839" className="map"></iframe>
                  </div>
               </div>
            </div>
         </div>
         <div className="footer-bottom homebottom">
            <div className="container">
               <div className="row">
                  <div className="col-sm-8">© 2020 kuarzabumi.my All rights reserved. Designed and developed by <Link to="https://www.spiders.asia/" style={{color: '#fff'}}>Spider Asia Sdn Bhd</Link></div>
                  <div className="col-sm-4 text-right">
                     <ul className="list-unstyled list-inline footer-social">
                        <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-instagram"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-linkedin"></i> </Link> </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </footer>
  )
}

export default Footer;