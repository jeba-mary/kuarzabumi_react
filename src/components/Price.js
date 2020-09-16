import React from 'react';
import { Link } from 'react-router-dom';

function Price() {
  return (
          <section className="price">
	<div className="container">
		<div className="row">
			<div className="col-md-12 col-sm-12  xs-big-mt">
				<div className="py-7  xs-py-3 xs-pl-0">
					<div className="heading-block">
						<h2 className="text-uppercase">
                           <label className="theme-text">PRICE &amp; SPECS</label>
                        </h2> </div>
					<div className="row">
						<div className="col-md-3">
							<h4>GoAuto Van</h4>
							<p>starting from RM143,000.00*</p>
						</div>
						<div className="col-md-9">
							<div className="row">
								<div className="col-md-8">
									<div className="pricebtn1" data-toggle="collapse" data-target="#demo">Price Sheet</div>
									<div id="demo" className="collapse seatervan">
										<div className="row">
											<div className="col-md-4">
												<Link to="images/2.5L-15-seater-5-speed.pdf" target="_blank">
													<button type="button" className="btn seatervan1 btn-success">2.5L 15 Seater 5 Speed</button>
												</Link>
											</div>
											<div className="col-md-4">
												<Link to="images/3.0L-18-seater -5-speed.pdf" target="_blank">
													<button type="button" className="btn seatervan1 btn-success">3.0L 18 Seater 5 Speed</button>
												</Link>
											</div>
											<div className="col-md-4">
												<Link to="images/Panel-Van-3.0L-5-Speed.pdf" target="_blank">
													<button type="button" className="btn seatervan1 btn-success">Panel Van 3.0L 5 Speed</button>
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="shets"> <Link to="https://goautovan.my/wp-content/uploads/2019/03/specsheet.pdf" className="pricebtn" target="_blank">Specs Sheet</Link> </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="sheetlist">
				<div className="bs-example">
					<div className="panel-group" id="accordion">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h4 className="panel-title">
                                          <Link  data-toggle="collapse" data-parent="#accordion" to="#collapseOne" aria-expanded="false" className="collapsed"><span className="glyphicon glyphicon-plus"></span> Engine</Link>
                                       </h4> </div>
							<div id="collapseOne" className="panel-collapse collapse" aria-expanded="false"  style={{height: '0px'}}>
								<div className="panel-body">
									<table className="table table-borderless">
										<tbody>
											<tr>
												<td>Type</td>
												<td>4 Strokes, 16 Valves, Direct Injection DOHC, Turbo Charge, Inter Cooler, EGR, CRDI (Common Rail Direct Injection)</td>
											</tr>
											<tr>
												<td>Model (Emission Level)</td>
												<td>DK5 (Euro III)</td>
											</tr>
											<tr>
												<td>Displacement (cc)</td>
												<td>2982</td>
											</tr>
											<tr>
												<td>Fuel Type</td>
												<td>Diesel</td>
											</tr>
											<tr>
												<td>Compression Ratio</td>
												<td>17.3 : 1</td>
											</tr>
											<tr>
												<td>Rated Power (KW/rpm)</td>
												<td>110/3400</td>
											</tr>
											<tr>
												<td>Max. Torque (Nm/rpm)</td>
												<td>330/2000</td>
											</tr>
											<tr>
												<td>Max. Speed (KM/h)</td>
												<td>125</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className="panel panel-default">
							<div className="panel-heading">
								<h4 className="panel-title">
                                          <Link  data-toggle="collapse" data-parent="#accordion" to="#collapseTwo" className="collapsed" aria-expanded="false"><span className="glyphicon glyphicon-plus"></span> Dimension &amp; Height</Link>
                                       </h4> </div>
							<div id="collapseTwo" className="panel-collapse collapse" aria-expanded="false" style={{height: '0px'}}>
								<div className="panel-body">
									<table className="table table-borderless">
										<tbody>
											<tr>
												<td>Overall L x W x H (mm) </td>
												<td>5990 X 1880 X 2285</td>
											</tr>
											<tr>
												<td>Wheelbase (mm) </td>
												<td>3720</td>
											</tr>
											<tr>
												<td>Wheel Track Front/Rear (mm)</td>
												<td>1655/1650</td>
											</tr>
											<tr>
												<td>Min. Turning Radius (m)</td>
												<td>6.25</td>
											</tr>
											<tr>
												<td>Min. Ground Clearance (mm)</td>
												<td>200</td>
											</tr>
											<tr>
												<td>Laden Weight (kg)</td>
												<td>3960</td>
											</tr>
											<tr>
												<td>Curb Weight (kg)</td>
												<td>2550</td>
											</tr>
											<tr>
												<td>Fuel Tank Capacity (L)</td>
												<td>70</td>
											</tr>
											<tr>
												<td>Seating Capacity</td>
												<td>18 Seats</td>
											</tr>
											<tr>
												<td>Tyre</td>
												<td>215 / 75R16C</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className="panel panel-default">
							<div className="panel-heading">
								<h4 className="panel-title">
                                          <Link  data-toggle="collapse" data-parent="#accordion" to="#collapseThree" className="collapsed" aria-expanded="false"><span className="glyphicon glyphicon-plus"></span> Chassis</Link>
                                       </h4> </div>
							<div id="collapseThree" className="panel-collapse collapse" aria-expanded="false">
								<div className="panel-body">
									<table className="table table-borderless">
										<tbody>
											<tr>
												<td>Drive System</td>
												<td>Front Engine / Rear Wheel Drive</td>
											</tr>
											<tr>
												<td>Steering</td>
												<td>Hydraulic Aid</td>
											</tr>
											<tr>
												<td>Clutch</td>
												<td>Single Chip, Hydraulic</td>
											</tr>
											<tr>
												<td>Transmission</td>
												<td>6-Speed MT / 5-Speed MT</td>
											</tr>
											<tr>
												<td>Break Front / Rear</td>
												<td>Front Disc / Rear Drum</td>
											</tr>
											<tr>
												<td>Suspension Front / Rear</td>
												<td>Front Independent Double Wishbone/ Rear Variable Stiffness Spring</td>
											</tr>
											<tr>
												<td>Safety</td>
												<td>ABS + EBD</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className="panel panel-default">
							<div className="panel-heading">
								<h4 className="panel-title">
                                          <Link  data-toggle="collapse" data-parent="#accordion" to="#collapseFour" className="collapsed" aria-expanded="false"><span className="glyphicon glyphicon-plus"></span> Exterior &amp; Interior</Link>
                                       </h4> </div>
							<div id="collapseFour" className="panel-collapse collapse" aria-expanded="false">
								<div className="panel-body">
									<table className="table table-borderless">
										<tbody>
											<tr>
												<td>Window Glass </td>
												<td>Transparent-driver &amp; Front-passenger Window / Transparent-glass (Passenger &amp; Rear Window)</td>
											</tr>
											<tr>
												<td>Power Window</td>
												<td>Driver Window &amp; Front-passenger Window</td>
											</tr>
											<tr>
												<td>Exterior Mirror</td>
												<td>Electronic Control with Turning Light</td>
											</tr>
											<tr>
												<td>Interior Mirror </td>
												<td>Anti dazzle</td>
											</tr>
											<tr>
												<td>Seat</td>
												<td>Adjustable Back rest</td>
											</tr>
											<tr>
												<td>Passenger Seat Belt</td>
												<td>3 Point</td>
											</tr>
											<tr>
												<td>Artificial Leather Seat </td>
												<td>:</td>
											</tr>
											<tr>
												<td>Last Row 2 Folding Hanging Seats</td>
												<td>:</td>
											</tr>
											<tr>
												<td>Quartz Sand Carpet </td>
												<td>:</td>
											</tr>
											<tr>
												<td>A/C &amp; Inlet Filtration System </td>
												<td>:</td>
											</tr>
											<tr>
												<td>Front Heater </td>
												<td>:</td>
											</tr>
											<tr>
												<td>Central Door Lock (Electronic) </td>
												<td>:</td>
											</tr>
											<tr>
												<td>AM / FM Radio, CD &amp; Loudspeaker </td>
												<td>:</td>
											</tr>
											<tr>
												<td>Brake Pedal Energy Absorber </td>
												<td>:</td>
											</tr>
											<tr>
												<td>Compartment Lamp </td>
												<td>:</td>
											</tr>
											<tr>
												<td>LED Rear Combined Lamp </td>
												<td>:</td>
											</tr>
											<tr>
												<td>Rear Windshield Wiper, Washer &amp; Defroster </td>
												<td>:</td>
											</tr>
											<tr>
												<td>High Position Brake Lamp </td>
												<td>:</td>
											</tr>
											<tr>
												<td>Storage Box &amp; Cup Holder </td>
												<td>:</td>
											</tr>
											<tr>
												<td>Steering Wheel (Adjustable) </td>
												<td>:</td>
											</tr>
											<tr>
												<td>Rear Parking Sensor </td>
												<td>:</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div className="panel panel-default">
						<div className="panel-heading">
							<h4 className="panel-title">
                                       <Link  data-toggle="collapse" data-parent="#accordion" to="#collapseFive"><span className="glyphicon glyphicon-plus"></span> Option</Link>
                                    </h4> </div>
						<div id="collapseFive" className="panel-collapse collapse">
							<div className="panel-body">
								<table className="table table-borderless">
									<tbody>
										<tr>
											<td>GPS &amp; DVD &amp; Reverse Display</td>
											<td>0</td>
										</tr>
										<tr>
											<td>15 Inch Manual Folding LCD </td>
											<td>0</td>
										</tr>
										<tr>
											<td>Refrigerator</td>
											<td>0</td>
										</tr>
										<tr>
											<td>Genuine Leather Seat</td>
											<td>0</td>
										</tr>
										<tr>
											<td>Fabric Business Seat</td>
											<td>0</td>
										</tr>
										<tr>
											<td>Micro Bus Air-Con</td>
											<td>0</td>
										</tr>
										<tr>
											<td>Air Cleaner (Negative-ion)</td>
											<td>0</td>
										</tr>
										<tr>
											<td>Four Wheel Brake Disc</td>
											<td>0</td>
										</tr>
										<tr>
											<td>Luxury Aero Seat </td>
											<td>0</td>
										</tr>
										<tr>
											<td>Side Sliding Window (Embedded)</td>
											<td>0</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
  )
}

export default Price;