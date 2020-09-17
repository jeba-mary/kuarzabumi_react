import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/gallery/imgnew1.jpg';
function Gallery () {
  return (
<section className="p-0 pos-r gallery" id="gallery">
         <div className="container">
            <h2 className="text-uppercase">
               <label className="theme-text">Gallery</label>
            </h2>
            <div className="row">
               <div className="b-isotope popup-gallery b-isotope-3">
                  <ul className="b-isotope-grid grid list-unstyled columns4"  style={{position: 'relative', height: '960px', }}>
                     <li className="grid-sizer"></li>
                     <li className="grid-item design" style={{position: 'absolute', left: '0%', top: '0px'}} >
                        <div className="isotope-img portfolio-item">
                           <div className="item-img">
                              <div className="overlay"> <Link to={require('../images/gallery/newimg1.jpg')} className="link-icon popup-img"><i className="lnr lnr-picture"></i> </Link></div>
                              <img src={require('../images/gallery/newimg1.jpg')} alt="Design"/> 
                           </div>
                           <div className="image-info">
                           </div>
                        </div>
                     </li>

                     <li className="grid-item design" style={{position: 'absolute', left: '25%', top: '0px'}}>
                        <div className="isotope-img portfolio-item">
                           <div className="item-img">
                              <div className="overlay"> <Link to= {require('../images/gallery/imgnew2.jpg')}className="link-icon popup-img" ><i className="lnr lnr-picture"></i> </Link></div>
                              <img src={require('../images/gallery/newimg2.jpg')}  alt="Design"/> 
                           </div>
                           <div className="image-info">
                           </div>
                        </div>
                     </li>
                     <li className="grid-item design" style={{position: 'absolute', left: '50%', top: '0px'}}>
                        <div className="isotope-img portfolio-item">
                           <div className="item-img">
                              <div className="overlay"> <Link to= {require('../images/gallery/image1.jpg')} className="link-icon popup-img" ><i className="lnr lnr-picture"></i> </Link></div>
                              <img src={require('../images/gallery/image1.jpg')}  alt="Design"/> 
                           </div>
                           <div className="image-info">
                           </div>
                        </div>
                     </li>
                     <li className="grid-item photo" style={{position: 'absolute', left: '75%', top: '0px'}}>
                        <div className="isotope-img portfolio-item">
                           <div className="item-img">
                              <div className="overlay"> <Link to= {require('../images/gallery/image10.jpg')} className="link-icon popup-img" ><i className="lnr lnr-picture"></i></Link>  </div>
                              <img src={require('../images/gallery/image10.jpg')}  alt="Photo"/> 
                           </div>
                           <div className="image-info">
                           </div>
                        </div>
                     </li>
                     <li className="grid-item photo" style={{position: 'absolute', left: '0', top: '290px'}}>
                        <div className="isotope-img portfolio-item">
                           <div className="item-img">
                              <div className="overlay"> <Link className="link-icon popup-img" to= {require('../images/gallery/image11.jpg')}><i className="lnr lnr-picture"></i></Link></div>
                              <img src={require('../images/gallery/image11.jpg')}  alt="Photo"/> 
                           </div>
                           <div className="image-info">
                           </div>
                        </div>
                     </li>
                     <li className="grid-item photo" style={{position: 'absolute', left: '25%', top: '290px'}}>
                        <div className="isotope-img portfolio-item">
                           <div className="item-img">
                              <div className="overlay"> <Link className="link-icon popup-img" to={require('../images/gallery/image12.jpg')}><i className="lnr lnr-picture"></i></Link>  </div>
                              <img src={require('../images/gallery/image12.jpg')}  alt="Photo"/> 
                           </div>
                           <div className="image-info">
                           </div>
                        </div>
                     </li>
                     <li className="grid-item photo" style={{position: 'absolute', left: '50%', top: '290px'}}>
                        <div className="isotope-img portfolio-item">
                           <div className="item-img">
                              <div className="overlay"> <Link className="link-icon popup-img" to={require('../images/gallery/image2.jpg')}><i className="lnr lnr-picture"></i></Link> </div>
                              <img src={require('../images/gallery/image2.jpg')}  alt="Photo"/> 
                           </div>
                           <div className="image-info">
                           </div>
                        </div>
                     </li>
                     <li className="grid-item photo" style={{position: 'absolute', left: '75%', top: '290px'}}>
                        <div className="isotope-img portfolio-item">
                           <div className="item-img">
                              <div className="overlay"> <Link className="link-icon popup-img" to = {require('../images/gallery/image3.jpg')}><i className="lnr lnr-picture"></i></Link> </div>
                              <img src={require('../images/gallery/image3.jpg')}  alt="Photo"/> 
                           </div>
                           <div className="image-info">
                           </div>
                        </div>
                     </li>
                     <li className="grid-item photo" style={{position: 'absolute', left: '50%', top: '457px'}}>
                        <div className="isotope-img portfolio-item">
                           <div className="item-img">
                              <div className="overlay"> <Link className="link-icon popup-img" to="images/gallery/image4.jpg"><i className="lnr lnr-picture"></i></Link> </div>
                              <img src={require('../images/gallery/image4.jpg')} alt="Photo"/> 
                           </div>
                           <div className="image-info">
                           </div>
                        </div>
                     </li>
                     <li className="grid-item photo" style={{position: 'absolute', left: '75%', top: '457px'}}>
                        <div className="isotope-img portfolio-item">
                           <div className="item-img">
                              <div className="overlay"> <Link className="link-icon popup-img" to={require('../images/gallery/image5.jpg')}><i className="lnr lnr-picture"></i></Link> </div>
                              <img src={require('../images/gallery/image5.jpg')}  alt="Photo"/> 
                           </div>
                           <div className="image-info">
                           </div>
                        </div>
                     </li>
                     <li className="grid-item photo" style={{position: 'absolute', left: '0%', top: '580px'}}>
                        <div className="isotope-img portfolio-item">
                           <div className="item-img">
                              <div className="overlay"> <Link className="link-icon popup-img" to={require('../images/gallery/image6.jpg')}><i className="lnr lnr-picture"></i></Link> </div>
                              <img src={require('../images/gallery/image6.jpg')}  alt="Photo"/> 
                           </div>
                           <div className="image-info">
                           </div>
                        </div>
                     </li>
                     <li className="grid-item photo" style={{position: 'absolute', left: '25%', top: '580px'}}>
                        <div className="isotope-img portfolio-item">
                           <div className="item-img">
                              <div className="overlay"> <Link className="link-icon popup-img" to={require('../images/gallery/image7.jpg')}><i className="lnr lnr-picture"></i></Link>  </div>
                              <img src={require('../images/gallery/image7.jpg')}  alt="Photo"/> 
                           </div>
                           <div className="image-info">
                           </div>
                        </div>
                     </li>
                     <li className="grid-item photo" style={{position: 'absolute', left: '50%', top: '625px'}}>
                        <div className="isotope-img portfolio-item">
                           <div className="item-img">
                              <div className="overlay"> <Link className="link-icon popup-img" to={require('../images/gallery/image13.jpg')}><i className="lnr lnr-picture"></i></Link> </div>
                              <img src={require('../images/gallery/image13.jpg')}  alt="Photo"/> 
                           </div>
                           <div className="image-info">
                           </div>
                        </div>
                     </li>
                     <li className="grid-item photo" style={{position: 'absolute', left: '75%', top: '625px'}}>
                        <div className="isotope-img portfolio-item">
                           <div className="item-img">
                              <div className="overlay"> <Link className="link-icon popup-img" to={require('../images/gallery/image14.jpg')}><i className="lnr lnr-picture"></i></Link> </div>
                              <img src={require('../images/gallery/image14.jpg')}  alt="Photo"/> 
                           </div>
                           <div className="image-info">
                           </div>
                        </div>
                     </li>
                     <li className="grid-item photo" style={{position: 'absolute', left: '0%', top: '747px'}}>
                        <div className="isotope-img portfolio-item">
                           <div className="item-img">
                              <div className="overlay"> <Link className="link-icon popup-img" to={require('../images/gallery/image15.jpg')}><i className="lnr lnr-picture"></i></Link></div>
                              <img src={require('../images/gallery/image15.jpg')}  alt="Photo"/> 
                           </div>
                           <div className="image-info">
                           </div>
                        </div>
                     </li>
                     <li className="grid-item photo" style={{position: 'absolute', left: '25%', top: '747px'}}>
                        <div className="isotope-img portfolio-item">
                           <div className="item-img">
                              <div className="overlay"> <Link className="link-icon popup-img" to={require('../images/gallery/image16.jpg')}><i className="lnr lnr-picture"></i></Link>  </div>
                              <img src={require('../images/gallery/image16.jpg')}  alt="Photo"/> 
                           </div>
                           <div className="image-info">
                           </div>
                        </div>
                     </li>
                     <li className="grid-item photo" style={{position: 'absolute', left: '50%', top: '792px'}}>
                        <div className="isotope-img portfolio-item">
                           <div className="item-img">
                              <div className="overlay"> <Link className="link-icon popup-img" to={require('../images/gallery/image17.jpg')}><i className="lnr lnr-picture"></i></Link> </div>
                              <img src={require('../images/gallery/image17.jpg')}  alt="Photo"/> 
                           </div>
                           <div className="image-info">
                           </div>
                        </div>
                     </li>
                     <li className="grid-item photo" style={{position: 'absolute', left: '75%', top: '792px'}}>
                        <div className="isotope-img portfolio-item">
                           <div className="item-img">
                              <div className="overlay"> <Link className="link-icon popup-img" to={require('../images/gallery/image18.jpg')}><i className="lnr lnr-picture"></i></Link> </div>
                              <img src={require('../images/gallery/image18.jpg')}  alt="Photo"/> 
                           </div>
                           <div className="image-info">
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
  )
}
export default Gallery;