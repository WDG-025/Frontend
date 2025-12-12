import { type Post } from './post';
import { getPostsWithoutValidation, getPosts } from './post';
import { useState, useEffect } from 'react';
export default function PostContainer() {
	const [posts, setPosts] = useState<Post[] | null>(null);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		async function fetchPosts() {
			try {
				const postData = await getPosts();
				setPosts(postData);
			} catch (error) {
				if (error instanceof Error) {
					setError(error);
				} else {
					console.log('Something went wrong');
				}
			}
		}
		fetchPosts();
	}, []);

	if (error) {
		return <p>{error.message}</p>;
	}

	return (
		<>
			{posts?.map((post) => {
				return (
					<>
						<p>{post.title}</p>
						<p>{post.body}</p>
					</>
				);
			})}
		</>
	);
}
