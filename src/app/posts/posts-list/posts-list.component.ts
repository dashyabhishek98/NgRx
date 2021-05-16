import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter } from 'src/app/counter/state/counter.selectors';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPosts } from './state/posts.selector';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Observable<Post[]>;
  constructor(private store : Store<AppState>) { 
    this.posts = this.store.select(getPosts);
  }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
  }

}
