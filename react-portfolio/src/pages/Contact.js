import { useState } from "react";
import emailjs from "emailjs-com";
import ContactForm from "../components/ContactForm"


const Contact = () => {

	const blankForm = {
		contactName: "",
		contactEmail: "",
		message: ""
	}


	const [form, setForm] = useState(blankForm);


	const handleInputChange = ({ target }) => {
		setForm({ ...form, [target.name]: target.value });
	}


	const handleFormSubmit = (event) => {
		event.preventDefault();

		emailjs.send("service_9w3pdxc", "template_1eemkw8", form, "user_YLthPpTzEEnLy1T32cLXl")
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
	}


	return (
		<main className="container bg-light my-4 p-4 flex-shrink-0">

			<h1 className="display-5 pt-2 font-weight-bolder">Contact</h1>
			<hr />

			<ContactForm
				contactName={form.contactName}
				contactEmail={form.contactEmail}
				message={form.message}
				handleFormSubmit={handleFormSubmit}
				handleInputChange={handleInputChange}
			/>

		</main>
	);
}

export default Contact;
