import {
	useState,
	useReducer,
	type ChangeEventHandler,
	type MouseEventHandler,
	type FormEvent,
} from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
function App() {
	return (
		<>
			<NameForm />
			<FruitSelect />
			<ClickLogger />
			<FormHandler />
			<FormHandlerTwo />
			<Counter />
			<Product
				product={{ id: 1, title: 'bag', description: 'very expensive' }}
			/>
		</>
	);
}

export default App;

function NameForm() {
	const [name, setName] = useState('');

	// function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
	// 	setName(event.target.value);
	// }

	const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>
		setName(event.target.value);

	return (
		<form>
			<label htmlFor='name'>Name: </label>
			<input onChange={handleChange} type='text' name='name' id='name' />
			{name && <p>Hello, {name}</p>}
		</form>
	);
}

const fruitMap = {
	apple: { emoji: '🍎', label: 'Red Apple' },
	banana: { emoji: '🍌', label: 'Yellow Banana' },
	cherry: { emoji: '🍒', label: 'Sweet Cherry' },
	orange: { emoji: '🍊', label: 'Juicy Orange' },
	grape: { emoji: '🍇', label: 'Purple Grapes' },
	watermelon: { emoji: '🍉', label: 'Fresh Watermelon' },
	strawberry: { emoji: '🍓', label: 'Sweet Strawberry' },
	pineapple: { emoji: '🍍', label: 'Tropical Pineapple' },
	mango: { emoji: '🥭', label: 'Ripe Mango' },
	lemon: { emoji: '🍋', label: 'Zesty Lemon' },
	kiwi: { emoji: '🥝', label: 'Green Kiwi' },
	peach: { emoji: '🍑', label: 'Juicy Peach' },
	blueberry: { emoji: '🫐', label: 'Blueberry' },
} as const;

type Fruit = keyof typeof fruitMap;

function FruitSelect() {
	const [fruit, setFruit] = useState<Fruit>('apple');

	const chosenFruit = fruitMap[fruit];

	function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
		setFruit(event.target.value as Fruit);
	}

	return (
		<div>
			<label htmlFor='fruit'>Pick a fruit:</label>
			<select id='fruit' value={fruit} onChange={handleChange}>
				{Object.entries(fruitMap).map(([key, value]) => (
					<option key={key} value={key}>
						{value.label}
					</option>
				))}
			</select>
			<div>
				<span role='img' aria-label={chosenFruit.label}>
					{chosenFruit.emoji}
				</span>
				<span>{chosenFruit.label}</span>
			</div>
		</div>
	);
}

function ClickLogger() {
	// function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
	// 	console.log('button clicked', event);
	// }

	const handleClick: MouseEventHandler<HTMLButtonElement> = (event) =>
		console.log('button clicked', event);

	return <button onClick={handleClick}>Click me</button>;
}

function FormHandler() {
	const [error, setError] = useState<string | null>(null);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const email = formData.get('email');
		if (!email) {
			setError('Email is required');
			return;
		}
		console.log('Form submitted', email);
	}

	if (error) {
		return (
			<>
				<div>{error}</div>
				<button onClick={() => setError(null)}>Try again</button>
			</>
		);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type='email' name='email' id='email' />
			<button type='submit'>Submit</button>
		</form>
	);
}

const FallBack = ({ error, resetErrorBoundary }: FallbackProps) => {
	return (
		<>
			<div>
				{error instanceof Error
					? error.message
					: 'Something went wrong'}
			</div>
			<button onClick={resetErrorBoundary}>Try again</button>
		</>
	);
};

function FormHandlerTwo() {
	const action = (formData: FormData) => {
		const email = formData.get('email');
		if (!email) throw new Error('Email is required');
		console.log('Form submitted');
	};

	return (
		<ErrorBoundary FallbackComponent={FallBack}>
			<form action={action}>
				<input type='email' name='email' id='email' />
				<button type='submit'>Submit</button>
			</form>
		</ErrorBoundary>
	);
}

type State = { count: number };
type Action =
	| { type: 'increment'; payload: number }
	| { type: 'decrement' }
	| { type: 'reset' };
// type Action = 'increment' | 'decrement' | 'reset';

function reducer(state: State, action: Action) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + action.payload };
		case 'decrement':
			return { count: state.count - 1 };
		case 'reset':
			return { count: 0 };
	}
}

function Counter() {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	return (
		<>
			<p>Current count: {state.count}</p>
			<div>
				<button
					onClick={() => dispatch({ type: 'increment', payload: 5 })}
				>
					Increment
				</button>
				<button onClick={() => dispatch({ type: 'decrement' })}>
					Decrement
				</button>
				<button onClick={() => dispatch({ type: 'reset' })}>
					Reset
				</button>

				{/* <button onClick={() => dispatch('increment')}>Increment</button>
				<button onClick={() => dispatch('decrement')}>Decrement</button>
				<button onClick={() => dispatch('reset')}>Reset</button> */}
			</div>
		</>
	);
}

type Product = { id: number; title: string; description: string };

type ProductProps = {
	product: Product;
};

type CartState = Product[] | [];

type CartAction = { type: 'added_product'; payload: Product };

function cartReducer(state: CartState, action: CartAction) {
	switch (action.type) {
		case 'added_product':
			return [...state, action.payload];
	}
}

function Product({ product }: ProductProps) {
	const [cart, dispatch] = useReducer(cartReducer, []);
	// const { dispatch } = useCartContext();

	return (
		<>
			<div>
				<p>{product.title}</p>
				<p>{product.description}</p>
				<button
					onClick={() =>
						dispatch({ type: 'added_product', payload: product })
					}
				>
					Add Product to Cart
				</button>
			</div>
			{cart && cart?.map((p) => <p>{p.title}</p>)}
		</>
	);
}
