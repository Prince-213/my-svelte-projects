import type { RequestHandler } from './$types';
import { comments } from '$lib/data/comments';
import { json } from '@sveltejs/kit';

export const GET = async (requestEvent) => {
    const { params } = requestEvent
    const { commentId } = params
    const comment = comments.find(
        (comment) => comment.id === parseInt(commentId)
    )
    return json(comment)
};

export const PATCH: RequestHandler = async (requestEvent) => {
    const { params, request } = requestEvent
    const { commentId } = params
    const { text } = await request.json()
    const comment = comments.find(
        (comment) => comment.id === parseInt(commentId)
    )
    comment!.text = text
    return json(comment)
};

export const DELETE: RequestHandler = async (requestEvent) => {
    const { params } = requestEvent
    const { commentId } = params
    const deltedComment = comments.find(
        (comment) => comment.id === parseInt(commentId)
    )
    const index = comments.findIndex(
        (comment) => comment.id === parseInt(commentId)
    )

    comments.splice(index, 1)
    
    return json(deltedComment)
};