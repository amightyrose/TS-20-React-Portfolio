
const ContactForm = (props) => {

	const {
		contactName,
		contactEmail,
		message,
		handleFormSubmit,
		handleInputChange
	} = props;

	return (
		<form id="contactForm" onSubmit={handleFormSubmit}>

			<div className="form-group form-row">
				<label htmlFor="inputName" className="col-form-label col-sm-2">Name</label>
				<div className="col">
					<input
						type="text"
						id="inputName"
						name="contactName"
						className="form-control"
						placeholder="Name"
						value={contactName}
						onChange={handleInputChange}
						required
					/>
				</div>
			</div>

			<div className="form-group form-row">
				<label htmlFor="inputEmail" className="col-form-label col-sm-2">Email</label>
				<div className="col-sm-10">
					<input
						type="email"
						id="inputEmail"
						name="contactEmail"
						className="form-control"
						placeholder="Email"
						value={contactEmail}
						onChange={handleInputChange}
						required
					/>
				</div>
			</div>

			<div className="form-group form-row">
				<label htmlFor="inputMessage" className="col-form-label col-sm-2">Message</label>
				<div className="col-sm-10">
					<textarea
						id="inputMessage"
						name="message"
						className="form-control"
						rows="4"
						placeholder="Write message here"
						value={message}
						onChange={handleInputChange}
						required
					/>
				</div>
			</div>

			<div className="form-group form-row justify-content-center pt-3">
				<button type="submit" onClick={handleFormSubmit} className="btn btn-secondary">Submit</button>
			</div>

		</form>
	);
}

export default ContactForm;
