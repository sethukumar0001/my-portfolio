import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
	render() {
		return (
			<section id="about">
				<Fade duration={1000}>
					<div className="row">
						<div className="three columns">
							<img
								className="profile-pic"
								src={"/images/1.png"}
								alt="sk Pic"
							/>
						</div>
						<div className="nine columns main-col">
							<h2>About Me</h2>
							<p>
								To work in a challenging environment where I can contribute for
								organizational growth and to improve my skills as well. Willing
								to learn new technologies and adaptable to any environment.
							</p>
							<div className="row">
								<div className="columns contact-details">
									<h2>Contact Details</h2>
									<p className="address">
										<span>T Sethu Kumar</span>
										<br />
										<span>
											Tiruchanoor
											<br />
											{"Tirupati"} {"Andhra Pradesh"}, {"517503"}
										</span>
										<br />
										<span>{"8886257181"}</span>
										<br />
										<span>{"sethukumartirumanyam@gmail.com"}</span>
									</p>
								</div>
								<div className="columns download">
									<p>
										<a
											href={`/sethukumar.pdf`}
											className="button"
											target={"_blank"}
										>
											<i className="fa fa-download"></i>Download Resume
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</Fade>
			</section>
		);
	}
}

export default About;
