import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback, Instructions } from "../components/index.js";
import { registerNewsletter } from "../api/index.js";
import { useActionState } from "react";
import { toast } from "react-toastify";

// async function action(prev, formData) {
//   const data = Object.fromEntries(formData);
//   try {
//     const result = await registerNewsletter(data.email);
//     return {
//       success: result,
//     };
//   } catch (error) {
//     return { error: error.message };
//   }
// }

async function action(formData) {
  const email = formData.get("email");
  const result = await registerNewsletter(email);
  toast.success(result);
}

const Register = () => {
  // const [state, formAction, isPending] = useActionState(action, {});
  return (
    <div className="flex flex-col items-center">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {/* <form action={formAction}> */}
        <form action={action}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
            <legend className="fieldset-legend">Register to our newsletter</legend>
            <label className="label">Email</label>
            <input className="input w-full" name="email" placeholder="Email" />
            {/* {state?.error && <p className='text-sm text-red-600 mt-1'>{state.error}</p>}
            {state?.success && <p className='text-sm text-green-600 mt-1'>{state.success}</p>} */}
            <button type="submit" className="btn btn-neutral mt-4">
              Register!
            </button>
          </fieldset>
        </form>
      </ErrorBoundary>
      <Instructions path="/register.md" />
    </div>
  );
};

export default Register;
