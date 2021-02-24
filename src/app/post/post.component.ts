import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PostService } from '../post.service';
import { Post } from '../shared/post';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() post: Post;
  private destroy$: Subject<void> = new Subject();
  //private observable: Observable;

  constructor(private postService: PostService) {}

  ngOnInit(): void {}
  addLike(id: Post) {
    this.postService.addLike(id).pipe(takeUntil(this.destroy$)).subscribe();
  }
  dislike(id: Post) {
    this.postService.removeLike(id).pipe(takeUntil(this.destroy$)).subscribe();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
