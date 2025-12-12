import { z } from 'zod/v4';

const FormSchema = z.email();

function submitAction(formData: FormData) {
	const email = formData.get('email');
	const { data, success, error } = FormSchema.safeParse(email);
	if (!success) {
		console.log(z.prettifyError(error));
	} else {
		console.log(data);
	}
}

export default function SimpleForm() {
	return (
		<form action={submitAction}>
			<input type='email' name='email' id='email' />
			<button type='submit'>Submit</button>
		</form>
	);
}
