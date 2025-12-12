import { useActionState } from 'react';
import { z } from 'zod/v4';

const UserSchema = z.object({
	firstName: z.string().min(2),
	lastName: z.string().min(2),
	email: z.email(),
	password: z.string().min(8),
});

type User = z.infer<typeof UserSchema>;

type ActionState = {
	error: string | null;
	data: User | null;
};

export default function SignUpForm() {
	async function submitAction(prevState: ActionState, formData: FormData) {
		const userInput = Object.fromEntries(formData);
		const { data, success, error } = UserSchema.safeParse(userInput);
		if (!success) {
			return { error: z.prettifyError(error), data: null };
		}
		{
			return { error: null, data: data };
		}
		// validate
	}

	const [state, formAction, isPending] = useActionState(submitAction, {
		error: '',
		data: null,
	});
	return (
		<>
			{isPending && <p>Pending...</p>}
			<p>{state?.error}</p>
			<form action={formAction}>
				<label htmlFor='firstName'>Firstname:</label>
				<input type='text' name='firstName' id='firstName' />

				<label htmlFor='lastName'>Lastname:</label>
				<input type='text' name='lastName' id='lastName' />

				<label htmlFor='Email'>Email:</label>
				<input type='email' name='email' id='email' />

				<label htmlFor='Password'>Password</label>
				<input type='password' name='password' id='password' />

				<button>Sign Up</button>
			</form>
			<p>{state?.data?.firstName}</p>
			<p>{state?.data?.lastName}</p>
			<p>{state?.data?.email}</p>
			<p>{state?.data?.password}</p>
		</>
	);
}
