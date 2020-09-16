import React from 'react';
import {Link} from 'react-router-dom';

class TestDrive extends React.Component {
  render() {
    return (
      <section class="testdrive">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  <img src={require('../images/banner/bg3.jpg')} class="img-responsive" alt="" />
               </div>
               <div class="col-md-6 col-sm-8  xs-big-mt">
                  <div class="py-7  xs-py-3 xs-pl-0">
                     <div class="heading-block">
                        <h2 class="text-uppercase">
                           <label class="theme-text">BOOK A TEST DRIVE</label>
                        </h2>
                     </div>
                     <form  class="raounded">
                        <div class="row">
                           <div class="col-sm-6">
                              <div class="form-group">
                                 <select name="menu-372" class="form-control"  >
                                    <option value="Select Departments">Select Brand</option>
                                    
                                    <option value="Laryngological Clinic">Go Auto HigerAce</option>
                                    <option value="Outpatient Rehabilitation">Borgward</option>
                                 </select>
                              </div>
                           </div>
                           <div class="col-sm-6">
                              <div class="form-group">
                                 <select name="menu-372" class="form-control">
                                    <option value="Select Doctors">Select Modal</option>
                                    <option value="3.0L, 5 Speed, 18 Seater, 6 Meter Window Van">3.0L, 5 Speed, 18 Seater, 6 Meter Window Van</option>
                                    <option value="2.5L  5 Speed 15 Seater, 5.4 Meter Window Van">2.5L  5 Speed 15 Seater, 5.4 Meter Window Van</option>
                                    <option value="3.0L, 5Speed, 2 Seater, 5.4 Meter Panel Van">3.0L, 5Speed, 2 Seater, 5.4 Meter Panel Van</option>
                                    <option value="BX5 1.4T">BX5 1.4T</option>
                                    <option value="BX5 2.0T">BX5 2.0T</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-sm-6">
                              <div class="form-group">
                                 <input name="Your Name" id="yourname" class="form-control" placeholder="Your Name" type="text"/>
                              </div>
                           </div>
                           <div class="col-sm-6">
                              <div class="form-group">
                                 <input name="Phone" id="Phone" class="form-control" placeholder="Phone" type="text"/>
                              </div>
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-sm-6">
                              <div class="form-group">
                                 <div class="form-group">
                                    <input name="Your Email" id="youremail" class="form-control" placeholder="Your Email" type="email"/>
                                 </div>
                              </div>
                           </div>
                           <div class="col-sm-6">
                              <div class='input-group date datetimepicker' id='datetimepicker'>
                                 <input type='text' placeholder="Select Date and Time" class="form-control" />
                                 <span class="input-group-addon">
                                 <i class="fa fa-calendar"></i>
                                 </span>
                              </div>
                           </div>
                        </div>
                        <Link to="#" class="btn btn-default animated btn-radius theme-bg white-text">Submit<i class="fa fa-sign-in" aria-hidden="true"></i></Link>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
    )
  }
}

export default TestDrive;