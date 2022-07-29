import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
	getRandomColor() {
		let letters = "0123456789ABCDEF";
		let color = "#";
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	state = {
		education: [
			{
				school: "University?",
				degree: "Bachelor of Technology ( JNTUA )",
				graduated: "2018",
			},
			{
				school: "College?",
				degree: "Narayana Jr College",
				graduated: "2014",
			},
		],
		work: [
			{
				company: "Novisync solutions india pvt. ltd",
				title: "React JS Web Developer",
				years: "1.3 years (2018/Nov - 2021/Jan)",
			},
			{
				company: "BigAppCompany.com",
				title: "React JS Web Developer & React Native Mobile Developer",
				years: "2.6 years (2021/Feb - Present)",
			},
		],
		skills: [
			{
				name: "React JS",
				level: "100%",
			},
			{
				name: "Next JS",
				level: "100%",
			},
			{
				name: "React Native",
				level: "80%",
			},
			{
				name: "HTML, CSS, SASS & JS",
				level: "90%",
			},
		],
	};

	render() {

		const education = this.state.education.map(function (education) {
			return (
				<div key={education.school}>
					<h3>{education.school}</h3>
					<p className="info">
						{education.degree} <span>&bull;</span>
						<em className="date">{education.graduated}</em>
					</p>
					{/* <p>{education.description}</p> */}
				</div>
			);
		});

		const work = this.state.work.map(function (work) {
			return (
				<div key={work.company}>
					<h3>{work.company}</h3>
					<p className="info">
						{work.title}
						<span>&bull;</span> <em className="date">{work.years}</em>
					</p>
					{/* <p>{work.description}</p> */}
				</div>
			);
		});

		const skills = this.state.skills.map((skills) => {
			const backgroundColor = this.getRandomColor();
			const className = "bar-expand " + skills.name.toLowerCase();
			const width = skills.level;

			return (
				<li key={skills.name}>
					<span style={{ width, backgroundColor }} className={className}></span>
					<em>{skills.name}</em>
				</li>
			);
		});

		return (
			<section id="resume">
				<Slide left duration={1300}>
					<div className="row education">
						<div className="three columns header-col">
							<h1>
								<span>Education</span>
							</h1>
						</div>

						<div className="nine columns main-col">
							<div className="row item">
								<div className="twelve columns">{education}</div>
							</div>
						</div>
					</div>
				</Slide>

				<Slide left duration={1300}>
					<div className="row work">
						<div className="three columns header-col">
							<h1>
								<span>Work</span>
							</h1>
						</div>

						<div className="nine columns main-col">{work}</div>
					</div>
				</Slide>

				<Slide left duration={1300}>
					<div className="row skill">
						<div className="three columns header-col">
							<h1>
								<span>Skills</span>
							</h1>
						</div>

						<div className="nine columns main-col">
							{/* <p>{skillmessage}</p> */}

							<div className="bars">
								<ul className="skills">{skills}</ul>
							</div>
						</div>
					</div>
				</Slide>
			</section>
		);
	}
}

export default Resume;
