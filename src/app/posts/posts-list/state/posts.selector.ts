import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";
import { PostsState } from "./posts.state";

export const POST_STATE_NAME = 'posts';

const getpostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);

export const getPosts = createSelector(getpostsState, (state)=>{
    return state.posts;
});
export const getPostById = createSelector(getpostsState, (state : PostsState,props: {id: string}) : Post=>{
    let post : Post = {
        id : '',
        title :  '',
        description : ''
    };
    const p = state.posts.find(post => (post.id === props.id));
    return  ((p === null || p === undefined) ? post : p);
});