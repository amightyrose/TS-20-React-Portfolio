const ProjectCard = (props) => {

	const {
		appURL,
		image,
		title,
		description,
		ghURL
	} = props.app


	return (
		<div className="text-center d-inline-block flex-grow-0 mb-3" style={{ maxWidth: "390px" }} key={props.index}>
			<a href={appURL} className="text-dark text-decoration-none" target="_blank" rel="noreferrer"><h4 className="mb-3">{title}</h4></a>
			<p className="text-center">{description}</p>
			<a href={appURL} target="_blank" rel="noreferrer"><img src={`assets/${image}`} alt={title} className="img-thumbnail mb-2" /></a>
			<p><a href={ghURL} target="_blank" rel="noreferrer" className="text-decoration-none" style={{ fontSize: "0.8em"}}>{title} on GitHub</a></p>
		</div>
	);
}

export default ProjectCard;
