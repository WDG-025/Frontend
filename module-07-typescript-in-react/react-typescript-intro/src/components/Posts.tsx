import type { Post } from '../types';
import { useState, useEffect } from 'react';

export function Post() {
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>();

	useEffect(() => {
		async function getPosts() {
			try {
				setLoading(true);
				const res = await fetch(
					'https://jsonplaceholder.typicode.com/posts'
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
