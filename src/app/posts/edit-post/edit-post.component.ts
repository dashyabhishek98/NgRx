import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../posts-list/state/posts.selector';
import { PostsState } from '../posts-list/state/posts.state';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post: Post;
  constructor(private activatedRoute: ActivatedRoute,
    private store:Store<AppState>) {
      this.post = {
        title : '',
        description : ''
      }
     }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) =>{
      let id = params.get('id');
      id = id === null ? '': id;
      this.store.select(getPostById,{id}).subscribe((data) =>{
        this.post = data;
      }) 
    });
  }
  onUpdatePost(){}
}
