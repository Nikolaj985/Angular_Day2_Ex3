import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../post.service';
import { Post, Resonse } from '../shared/post';
//import { postList } from '../shared/post-list';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pspas: Observable<Response>;
  posts: Post[];
  post$: Observable<Post[]>;
  showLoader: boolean;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.showLoader = true;
    this.post$ = this.postService.loadPosts().pipe(
      map((posts) => {
        return posts.map((post) => {
          if (post.description !== null) {
            post.description = post.description.slice(0, 97) + '...';
          }
          return post;
        });
      })
    );
    this.showLoader = false;
  }
}
