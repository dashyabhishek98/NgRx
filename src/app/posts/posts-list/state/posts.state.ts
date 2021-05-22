import { Post } from "src/app/models/posts.model";

export interface PostsState {
    posts: Post[];
}

export const initialState : PostsState = {
    posts: [
        {id: '1', title: 'Simple Title 1', description: 'Sameple description 1'},
        {id: '2', title: 'Simple Title 1', description: 'Sameple description 1'}
    ],
};