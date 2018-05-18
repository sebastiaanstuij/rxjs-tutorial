import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {
  title = 'Subject example';
  mySubject$;
  subscribeArray1 = [];
  subscribeArray2 = [];

  constructor() { }

  ngOnInit() {
    this.mySubject$ = new Subject();
    this.mySubject$.subscribe(value => this.subscribeArray1.push(value));

    this.mySubject$.next(1);
    this.mySubject$.next(2);

    // this.mySubject$.complete();
    // this.mySubject$.unsubscribe();

    this.mySubject$.subscribe(value => this.subscribeArray2.push(value));
    this.mySubject$.next(3);
  }

  ngOnDestroy() {
    this.mySubject$.unsubscribe();
  }

}
