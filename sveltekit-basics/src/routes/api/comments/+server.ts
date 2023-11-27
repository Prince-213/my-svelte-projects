import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { comments } from '$lib/data/comments';

export const GET: RequestHandler = async () => {
    return json(comments);
};

export const POST: RequestHandler = async (requestEvent) => {
    const { request } = requestEvent
    const { text } = await request.json()
    const newComment = {
        id: comments.length + 1,
        text
    }

    comments.push(newComment)
    return json(newComment, { status: 200 });
};