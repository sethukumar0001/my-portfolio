import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
	state = {
		social: [
			{
				className: "fa fa-facebook",
				url: "https://github.com/sethukumar0001",
			},
			{
				className: "fa fa-twitter",
				url: "https://github.com/sethukumar0001",
			},
			{
				className: "fa fa-linkedin",
				url: "https://github.com/sethukumar0001",
			},
			{
				className: "fa fa-instagram",
				url: "https://github.com/sethukumar0001",
			},
			{
				className: "fa fa-github",
				url: "https://github.com/sethukumar0001",
			},
		],
	};
	render() {
		const networks = this.state.social.map(function (network) {
			return (
				<li key={network.name}>
					<a href={network.url} target="_blank" rel="noreferrer">
						<i className={network.className}></i>
					</a>
				</li>
			);
		});

		return (
			<footer>
				<div className="row">
					<Fade bottom>
						<div className="twelve columns">
							<ul className="social-links">{networks}</ul>

							<ul className="copyright">
								<li>&copy; Copyright 2022</li>
								<li>
									{/* Design by{" "} */}
									<p title="Styleshout">
										T Sethu Kumar
									</p>
								</li>
							</ul>
						</div>
					</Fade>

					<div id="go-top">
						<a className="smoothscroll" title="Back to Top" href="#home">
							<i className="icon-up-open"></i>
						</a>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
