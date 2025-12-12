import { z } from 'zod/v4';

const url = 'https://jsonplaceholder.typicode.com/posts';

const PostSchema = z.object({
	userId: z.number(),
	id: z.number(),
	title: z.string(),
	body: z.string(),
});

const PostSchemaArray = z.array(PostSchema);

export type Post = z.infer<typeof PostSchema>;

export async function getPostsWithoutValidation() {
	const res = await fetch(url);
	if (!res.ok) throw new Error('Fetch failed');
	const posts = (await res.json()) as Post[];
	return posts;
}

export async function getPosts() {
	const res = await fetch(url);
	if (!res.ok) throw new Error('Fetch failed');
	const posts = await res.json();
	const { data, error, success } = PostSchemaArray.safeParse(posts);
	if (!success) {
		throw new Error(z.prettifyError(error));
	}
	return data;
}
