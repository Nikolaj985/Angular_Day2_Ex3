import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from '../post.service';
import { Post } from '../shared/post';
import { map } from 'rxjs/operators';
//import { postList } from '../shared/post-list';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  posts: Post[];
  post: Post;
  posts$: Observable<Post[]>;
  post$: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.post$ = this.postService.getPost(id);
  }
  addLike(post) {
    this.postService.addLike(post);
  }
  dislike(id: Post) {
    this.postService.removeLike(id);
  }
}
