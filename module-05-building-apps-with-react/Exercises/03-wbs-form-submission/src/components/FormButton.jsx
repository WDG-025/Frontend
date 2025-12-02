import { useFormStatus } from 'react-dom';

export default function FormButton({ children }) {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type='submit' className='btn btn-neutral mt-4'>
      {pending ? 'Pending...' : children}
    </button>
  );
}
