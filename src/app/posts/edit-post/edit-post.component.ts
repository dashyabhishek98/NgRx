import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { updatePost } from '../posts-list/state/posts.action';
import { getPostById } from '../posts-list/state/posts.selector';
import { PostsState } from '../posts-list/state/posts.state';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post: Post;
  postForm : FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
    private store:Store<AppState>) {
      this.post = {
        title : '',
        description : ''
      }
      this.postForm = new FormGroup({
        title : new FormControl(null, [Validators.required, Validators.minLength(6)]),
        description : new FormControl(null, [Validators.required, Validators.minLength(10)])
      })
     }

  ngOnInit(): void {
    console.log(this.postForm.controls['title']);
    this.activatedRoute.paramMap.subscribe((params) =>{
      let id = params.get('id');
      id = id === null ? '': id;
      this.store.select(getPostById,{id}).subscribe((data) =>{
        this.post = data;
        this.createForm();
      }) 
    });
  }

  showErrorDescription() :  string{
    const descriptionForm = this.postForm.controls['description'];
    if(descriptionForm.touched && !descriptionForm.valid){
      if(descriptionForm.errors!.required){
        return 'Description is required';
      }
      if(descriptionForm.errors!.minlength){
        return 'Description should be minimum 10 character length';
      }
    }
    return "";
  }

  onUpdatePost(){
    console.log(this.postForm.value);
    const post:Post = {
      id : this.postForm.value.id,
      title : this.postForm.value.title,
      description : this.postForm.value.description
    }
    this.store.dispatch(updatePost({ post }));

  }

  createForm() {
    this.postForm = new FormGroup({
      id : new FormControl(this.post.id),
      title : new FormControl(this.post.title,[Validators.required, Validators.minLength(6)]),
      description : new FormControl(this.post.description,[Validators.required, Validators.minLength(10)])
    })
  }
}
