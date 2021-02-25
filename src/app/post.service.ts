import { Injectable, OnInit } from '@angular/core';
import { Post, Resonse } from './shared/post';
//import { postList } from '../app/shared/post-list';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ParsedHostBindings } from '@angular/compiler';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService implements OnInit {
  posts$: Observable<Post[]>;
  resp$: Observable<Resonse>;
  private posts: Post[];
  private subscription: Subscription;
  private post: Post;
  private apiEndpoint = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {}

  loadPosts(): Observable<Post[]> {
    return this.httpClient.get(this.apiEndpoint).pipe(
      map((data: Resonse) => {
        return data.sources;
      })
    );
  }
  getPost(id): Observable<Post> {
    return this.httpClient.get(this.apiEndpoint).pipe(
      map((data: Resonse) => {
        return data.sources.find((post) => {
          if (post.id == id) {
            return post;
          }
        });
      })
    );
  }
  addLike(post: Post) {
    post.likes++;
    return this.httpClient.put('/api/posts/' + post.id, post);
  }
  removeLike(post: Post) {
    post.likes--;
    return this.httpClient.put('/api/posts/' + post.id, post);
  }
}
