import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./posts.state";

const getpostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getpostsState, (state)=>{
    return state.posts;
});