import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from './event';
import { format } from 'date-fns';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  create(event: Event): Observable<Event> {
    return this.http.post<Event>('http://127.0.0.1:3000/api/events', event);
  }

  getUserEvents(userId: string): Observable<Event[]> {
    return this.http.get<Event[]>('http://127.0.0.1:3000/api/events/user/' +
      userId);
  }

  get(id: string): Observable<Event> {
    return this.http.get<Event>('http://127.0.0.1:3000/api/events/' + id).pipe(
      map((res: Event) => this.formatDateTime(res))
    );
  }

  formatDateTime(event: Event): Event {
    event.displayStart = format(event.startTime, 'dddd MMM, Do - h:mm A');
    event.displayEnd = format(event.endTime, 'dddd MMM, Do - h:mm A');
    return event;
  }

  all(): Observable<Event[]> {
    return this.http.get<Event[]>('http://127.0.0.1:3000/api/events');
  }

  isEventCreator(creatorId: string): boolean {
    const user = this.authService.currentUser();
    return user._id === creatorId ? true : false;
  }

  subscribe(eventId: string, user: object): Observable<Event> {
    return this.http.patch<Event>('http://127.0.0.1:3000/api/events/' +
                                  eventId + '/subscribe', user);
  }

  update(event: Event): Observable<Event> {
    return this.http.patch<Event>('http://127.0.0.1:3000/api/events/' +
                                  event._id, event);
  }
}
