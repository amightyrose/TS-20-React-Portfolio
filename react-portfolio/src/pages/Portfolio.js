import apps from "../apps.json"
import ProjectCard from "../components/ProjectCard";

const Portfolio = () => {

	const projectCards = apps.map((app, index) => {
		return (
			<ProjectCard app={app} index={index} />
		)
	})

	return (
		<main className="container bg-light my-4 p-4 flex-shrink-0">
			<h1 className="display-5 pt-2 font-weight-bolder">Portfolio</h1>
			<hr />
			<div className="d-flex justify-content-around flex-wrap">
				{projectCards}
			</div>
		</main>
	);
}

export default Portfolio;
