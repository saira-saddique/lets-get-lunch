import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }
  create(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>('http://127.0.0.1:3000/api/comments', comment);
  }

  getEventComments(eventId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>('http://127.0.0.1:3000/api/comments/event/' +
                                    eventId);
  }
}