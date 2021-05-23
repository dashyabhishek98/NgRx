import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";
import { initialState } from "src/app/posts/posts-list/state/posts.state";
import { addPost } from "./posts.action";
import { updatePost } from "./posts.action";
import { PostsState } from "./posts.state";

const _postsReducer = createReducer(initialState,
    on(addPost, (state,action)=>{
        let post = {...action.post};
        post.id = ((state.posts.length) + 1).toString()
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(updatePost , (state,action)=>{
        const pos = {...action.post}
        const updatePost = state.posts.map(post =>{
            console.log(post.id === pos.id);
            return (post.id === pos.id) ? pos : post})
        return{
            ...state,
            posts : updatePost,
        };
    })
    );

export function postsReducer(state: PostsState | undefined ,action: Action){
    return _postsReducer(state,action);
}