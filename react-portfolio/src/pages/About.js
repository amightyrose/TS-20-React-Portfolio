const About = () => {
	return (
		<main className="container bg-light my-4 p-4 flex-shrink-0">

			<section>
				<h1 className="display-5 pt-2 font-weight-bolder">About Me</h1>
				<hr></hr>

				<div className="row">
					<div className="col">

						<img src="assets/bio-image.jpg" alt="Tim" className="float-left mr-4 mb-3 img-thumbnail" id="bioImage" style={{ height: "12rem" }} />

						<p>
							Hi there. My name is Tim and I'm a web developer, barista, bass player and dad. I live in Brisbane, Australia.
						</p>
						<p>
							I've had a lot of jobs over the years. Among other things I've been a sales assistant, locksmith, hospital orderly and fuel station console operator.
						</p>
						<p>
							I worked in the IT industry from 2003 to 2017, starting on a help desk then doing systems administration. By the time I left I was working as a systems engineer specialising in Windows and Active Directory, Citrix XenApp, virtualisation, scripting and enterprise backup solutions. I worked mainly with Microsoft, Citrix, VMware and Cisco technologies.
						</p>
						<p>
							In 2020 I decided to go back to the IT industry, this time as a web developer. I work with HTML/CSS, JavaScript, Node and React.
						</p>

					</div>
				</div>
			</section>

			<hr></hr>

			<section className="container">
				<h5 className="text-center pt-2">Find me here</h5>
				<div className="row justify-content-center py-2">

					<div className="col-sm-auto">
						<img src="https://img.icons8.com/color/24/000000/linkedin.png" alt="LinkedIn Icon" className="mr-1" />
						<a href="https://www.linkedin.com/in/timroseau" target="_blank" rel="noreferrer" className="text-decoration-none">LinkedIn</a>
					</div>

					<div className="col-sm-auto">
						<img src="https://img.icons8.com/color/24/000000/github--v1.png" alt="GitHub Icon" className="mr-1" />
						<a href="https://github.com/timsilby" target="_blank" rel="noreferrer" className="text-decoration-none">GitHub</a>
					</div>

					<div className="col-sm-auto">
						<img src="https://img.icons8.com/color/24/000000/envelope.png" alt="Email Icon" className="mr-1" />
						<a href="mailto:tim@timrose.com.au" target="_blank" rel="noreferrer" className="text-decoration-none">Email</a>
					</div>

				</div>
			</section>

		</main>

	);
}

export default About;
