import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-behavior-component',
  templateUrl: './behavior.component.html',
  styleUrls: ['./behavior.component.css']
})
export class BehaviorComponent implements OnInit, OnDestroy {
  title = 'Behavior example';
  mySubject$;
  subscribeArray1 = [];
  subscribeArray2 = [];

  constructor() { }

  ngOnInit() {
    this.mySubject$ = new BehaviorSubject(0);
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
