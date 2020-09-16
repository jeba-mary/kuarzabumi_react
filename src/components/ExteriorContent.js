import React from 'react';
import { Link } from 'react-router-dom';

class ExteriorContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exteriors: ["Sleek Design", "Rear combination lamp", "Front Grille"]
    };
  }
  render() {
    return (
       <section className="p-0 pos-r exterior desktopservices" id="exterior">
        <div className="container">
              <div className="row">
                <h2 className="text-uppercase">
                    <label className="theme-text">EXTERIOR</label>
                </h2>
                <div className="tabbable tabs-left">
                    <div className="tab-content">
                      <div className="tab-pane active" id="design">
                          <div className="">
                            <img src={require('../images/portfolio/img6.jpg')} className="img-responsive" alt="" />               
                          </div>
                      </div>
                      <div className="tab-pane" id="lamp"> 
                          <img src={require('../images/portfolio/img7.jpg')} className="img-responsive" alt="" /> 
                      </div>
                      <div className="tab-pane" id="grille"> 
                          <img src={require('../images/portfolio/img8.jpg')} className="img-responsive" alt="" /> 
                      </div>
                    </div>
                    <ul className="nav nav-tabs">
                     
                      <li className="active"><Link to="#design" data-toggle="tab"><i className="fa fa-plus" aria-hidden="true"></i> Sleek design</Link></li>
                      <li><Link to="#/lamp" data-toggle="tab"><i className="fa fa-plus" aria-hidden="true"></i> Rear combination lamp</Link></li>
                      <li><Link to="#/grille" data-toggle="tab"><i className="fa fa-plus" aria-hidden="true"></i> Front grille</Link></li>
                    </ul>
                </div>
              </div>
          </div>
       </section>
    )
  }
 }

export default ExteriorContent;