import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SparkSharedEventsService {
  private subject = new Subject<any>();

  public sendClickEvent(data: any) {
    this.subject.next(data);
  }

  public getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
