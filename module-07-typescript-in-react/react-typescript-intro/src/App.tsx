import { useEffect, useState } from 'react';
function App() {
	return (
		<>
			{/* <Greeting name='Karl' age={12} /> */}
			{/* <Greeting name={12} />
			<Button label='Click' />
			<Status status='error' />
			<Status status='loading' />
			<Status status='success' />
			{/* <Status status="ok"/> */}
			{/* <Container style={{ maxWidth: '600px', margin: '0' }}>
				<Status status='success' />
			</Container>
			<Counter /> */}
			<Post />
		</>
	);
}

export default App;

// function Greeting({ name = 'Guest' }) {
// 	return <h1>Hello, {name.toUpperCase()}</h1>;
// }

type GreetingProps = {
	name: string;
};

function Greeting({ name }: GreetingProps) {
	return <h1>Hello, {name.toUpperCase()}</h1>;
}

type ButtonProps = {
	label: string;
	colour?: string;
};

function Button({ label, colour = 'blue' }: ButtonProps) {
	return <button style={{ backgroundColor: colour }}>{label}</button>;
}

type StatusProps = {
	status: 'loading' | 'success' | 'error';
};

function Status({ status }: StatusProps) {
	return <p>Status: {status}</p>;
}

type ContainerProps = {
	children: React.ReactNode;
	style?: React.CSSProperties;
};

function Container({ children, style }: ContainerProps) {
	return (
		<div style={{ border: '2px dashed white', ...style }}>{children}</div>
	);
}

function Counter() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<p>Count: {count}</p>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Increment
			</button>
		</div>
	);
}

type UserType = {
	name: string;
	age: number;
	email?: string;
};

function Profile() {
	const [user, setUser] = useState<UserType>({ name: '', age: 18 });

	return (
		<p>
			{user.name} is {user.age} year old
			{user.email && user.email}
		</p>
	);
}

type ApiResponse<T> = {
	success: boolean;
	data: T;
};

const userReponse: ApiResponse<{ id: number; name: string }> = {
	success: true,
	data: { id: 1, name: 'Karl' },
};

function helloWorld(): string {
	return 'hello world';
}

// function USESTATE<T>(initialState: T) {
// 	const state: T = initialState;
// 	function setState() {
// 		return state;
// 	}
// 	return [state, setState];
// }

// USESTATE<UserType>({ name: 'karl', age: 20 });

function UserInfo() {
	const [user, setUser] = useState<UserType | null>(null);

	return <p>{user ? `Welcome ${user.name}` : 'Loading...'}</p>;
}

type Post = {
	id: number;
	title: string;
	body: string;
};

function Post() {
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>();

	useEffect(() => {
		async function getPosts() {
			try {
				setLoading(true);
				const res = await fetch(
					'https://jsonplaceholder.typicode.com/pots'
				);
				if (!res.ok) throw new Error('Failed to fetch posts');
				const data = (await res.json()) as Post[];
				setPosts(data);
				setLoading(false);
			} catch (error: unknown) {
				if (error instanceof Error) {
					setError(error.message);
					setLoading(false);
				}
			}
		}
		getPosts();
	}, []);

	if (loading) return <p>Loading....</p>;
	if (error) return <p>Error: {error}</p>;
	if (!posts) return <p>No posts found</p>;

	return (
		<ul>
			{posts.map((p) => (
				<li key={p.id}>{p.title}</li>
			))}
		</ul>
	);
}
