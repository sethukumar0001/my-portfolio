import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
	state = {
		projects: [
			{
				title: "Legit Blinds",
				image: "01.jpg",
				url: "https://storefront-dev.legitblinds.com/",
			},
			{
				title: "Healthtunnel",
				image: "02.jpg",
				url: "https://www.healthtunnel.com/",
			},
			{
				title: "Jobcards",
				image: "03.jpg",
				url: "https://explore.jobcards.in/",
			},

			{
				title: "Clinn",
				image: "05.jpg",
				url: "https://clinn-frontend.vercel.app",
			},
			{
				title: "Clinn Admin",
				image: "06.jpg",
				url: "https://clinn-admin-frontend.vercel.app",
			},
			{
				title: "Flying Carpet",
				image: "07.jpg",
				url: "https://www.companydomainid.com/",
			},
			{
				title: "Flying Carpet Admin",
				image: "13.jpg",
				url: "https://admin.companydomainid.com/login",
			},
			{
				title: "Carin",
				image: "09.jpg",
				url: "https://carin-ui.vercel.app/signin",
			},

			{
				title: "Survey",
				image: "08.jpg",
				url: "https://surveydemolink.in/",
			},
			{
				title: "Rebyuu.com",
				image: "04.jpg",
				url: "https://rebyuu-frontend.vercel.app/",
			},
			{
				title: "Curio",
				image: "10.jpg",
				url: "https://sandbox.curiotechnologies.com/login",
			},
			// {
			// 	title: "Mad Over Dreams",
			// 	image: "05.jpg",
			// 	url: "https://madoverdreams.com/",
			// },
			{
				title: "Tajaroob",
				image: "12.jpg",
				url: "https://tajaroob.vercel.app/",
			},
		],
		mobile_projects:[
			{
				title: "Audit Tool",
				image: "14.jpg",
				url: "https://play.google.com/store/apps/details?id=com.audit_tool",
			},
		]
	};
	render() {
		const projects = this.state.projects.map(function (projects) {
			let projectImage = "images/portfolio/" + projects.image;

			return (
				<div key={id++} className="columns portfolio-item">
					<div className="item-wrap">
						<Zmage alt={projects.title} src={projectImage} />
						<a
							href={projects.url}
							target="_blank"
              rel="noreferrer"
							style={{ textAlign: "center" }}
						>
							{projects.title}
						</a>
					</div>
				</div>
			);
		});
		const mobile_projects = this.state.mobile_projects.map(function (projects) {
			let projectImage = "images/portfolio/" + projects.image;

			return (
				<div key={id++} className="columns portfolio-item">
					<div className="item-wrap">
						<Zmage alt={projects.title} src={projectImage} />
						<a
							href={projects.url}
							target="_blank"
             				rel="noreferrer"
							style={{ textAlign: "center" }}
						>
							{projects.title}
						</a>
					</div>
				</div>
			);
		});
		return (
			<section id="portfolio">
				<Fade left duration={1000} distance="40px">
					<div className="row">
						<div className="twelve columns collapsed">
							<h1>Check Out Some of My Works In Web Development (React JS)</h1>

							<div
								id="portfolio-wrapper"
								className="bgrid-quarters s-bgrid-thirds cf"
							>
								{projects}
							</div>
						</div>
					</div>
				</Fade>
				<Fade left duration={1000} distance="40px">
					<div className="row">
						<div className="twelve columns collapsed">
							<h1>Check Out Some of My Works In Mobile Development (React Native)</h1>

							<div
								id="portfolio-wrapper"
								className="bgrid-quarters s-bgrid-thirds cf"
							>
								{mobile_projects}
							</div>
						</div>
					</div>
				</Fade>
			</section>
		);
	}
}

export default Portfolio;
