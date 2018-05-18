import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';


@Component({
  selector: 'app-replay-component',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent implements OnInit, OnDestroy {
  title = 'Replay example';
  mySubject$;
  subscribeArray1 = [];
  subscribeArray2 = [];

  constructor() { }

  ngOnInit() {
    this.mySubject$ = new ReplaySubject();
    this.mySubject$.subscribe(value => this.subscribeArray1.push(value));

    this.mySubject$.next(1);
    this.mySubject$.next(2);

    // this.mySubject$.complete();
    // this.mySubject$.unsubscribe();

    this.mySubject$.subscribe(value => this.subscribeArray2.push(value));
    this.mySubject$.next(3);
  }

  ngOnDestroy() {
  }
}
