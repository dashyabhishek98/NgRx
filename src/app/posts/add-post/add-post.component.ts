import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../posts-list/state/posts.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;
  constructor(private store: Store<AppState>) { 
    this.postForm = new FormGroup({
      title : new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description : new FormControl(null, [Validators.required, Validators.minLength(10)])
    })
  }

  ngOnInit(): void {
    
  }

  onAddPost(){
    // if(!this.postForm.valid){
    //   return ;
    // }
    const post :  Post = {
      title : this.postForm.value.title,
      description: this.postForm.value.description
    }
    console.log(post);
    this.store.dispatch(addPost({post}));
  }
  showErrorDescription() :  string{
    const descriptionForm = this.postForm.get('description');
    if(descriptionForm?.touched && !descriptionForm.valid){
      if(descriptionForm.errors){
        return 'Description is required';
      }
      if(descriptionForm.errors){
        return 'Description should be minimum 10 character length';
      }
    }
    return "";
  }

}
