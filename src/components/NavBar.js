import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
  return (
	<div className="wrapper">
      <div className="floats desktop">
         <div className="float-sm">

            <div className="fl-fl float-tw">
               <Link to="#"><i className="fa"><img src={require('../images/icons/test.png')} alt=""/></i>
               Test Drive</Link>
            </div>
            <div className="fl-fl float-fb">
               <i className="fa"><img src={require('../images/icons/telephone.png')} alt=""/></i>
               <Link to="tel:+60162227779"> Call: +6016 222 7779</Link>
            </div>
            <div className="fl-fl float-file">
               <Link to="#"><i className="fa"><img src={require('../images/icons/file.png')} alt=""/></i>
               Download Centre</Link>
            </div>
         </div>
      </div>

      <nav className="navbar navbar-default navbar-fixed bootsnav on no-full">
         <div className="top-container theme-bg white-text">
            <div className="container">
               <div className="row">
                  <div className="col-md-6">
                     <ul className="list-inline">
                        <li><i className="fa fa-envelope"></i> <Link to="mailto:enquiry@kuarzabumi.my" target="_blank">enquiry@kuarzabumi.my&nbsp; </Link><Link to="tel:+60162227779"> <i className="fa fa-phone"></i> +6016 222 7779</Link></li>
                     </ul>
                  </div>
                  <div className="col-md-6">
                     <div className="pull-right">
                        <ul className="list-inline">
                           <li><Link to="#" className="text-white"><img src={require('../images/icons/facebook.png')} alt=""/></Link></li>
                           <li><Link to="#" className="text-white"><img src={require('../images/icons/instagram.png')} alt=""/></Link></li>
                           <li><Link to="#" className="text-white"><img src={require('../images/icons/LinkedIn.png')} alt=""/></Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="top-search">
            <div className="container">
               <div className="input-group"> <span className="input-group-addon"><i className="fa fa-search"></i></span>
                  <input type="text" className="form-control" placeholder="Search"/>
                  <span className="input-group-addon close-search"><i className="fa fa-times"></i></span> 
               </div>
            </div>
         </div>

         <div className="container">
            <div className="navbar-header">
               <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu"> <i className="fa fa-bars"></i> </button>
               <Link className="navbar-brand" to="index.html"><img src={require('../images/brand/logo-black.png')} className="logo logo-scrolled" alt=""/> </Link> 
            </div>
            <div className="collapse navbar-collapse" id="navbar-menu">
               <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                  <li><Link to="index.html">Home</Link></li>
                
                  <li className=""><Link to="about-us.html">About Us</Link></li>
                  <li className="drop">
                     <Link to="#">Products<span className="caret"></span></Link> 
                     <ul className="dropdown-menu animated fadeOutUp">
                        <li className="active"><Link to="goauto.html">Go Auto</Link></li>
                        <li><Link to="./borgward/index.html">Borgward</Link></li>
                     </ul>
                  </li>
                  <li className=""><Link to="activity.html">Activity</Link></li>
                  <li className=""><Link to="contact-us.html">Contact Us</Link></li>
                  <li className=""><Link to="test-drive.html">Test Drive </Link></li>
                  <li className=""><Link to="#" data-toggle="modal" data-target="#myModal">Loan Calculator</Link></li>

               </ul>
            </div>
         </div>
      </nav>
  
         <div className="banner slidebanner">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              
               <div className="carousel-inner">
                  <div className="item active">
                     <img src={require('../images/banner/slidebanner1.jpg')} alt="banner1" style={{width: '100%'}}/>

                  </div>
               
               </div>
            </div>
               <Link className="left carousel-control" to="#myCarousel" data-slide="prev">
                 <span className="glyphicon glyphicon-chevron-left"></span>
                 <span className="sr-only">Previous</span>
               </Link>
               <Link className="right carousel-control" to="#myCarousel" data-slide="next">
                 <span className="glyphicon glyphicon-chevron-right"></span>
                 <span className="sr-only">Next</span>
               </Link>
         </div>
     
    
   
</div>
  );
}
}

export default NavBar;