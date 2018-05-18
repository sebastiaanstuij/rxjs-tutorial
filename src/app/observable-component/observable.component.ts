import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: [ './observable.component.css' ]
})
export class ObservableComponent implements OnInit, OnDestroy  {
  title = 'Observable example';
  observable$;
  subscribeArray = [];

  constructor() {}

  ngOnInit() {
     this.observable$ = Observable.create((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    this.observable$.subscribe(
      value => this.subscribeArray.push(value),
      err => {},
      () => this.subscribeArray.push('this is the end')
    );
  }

  ngOnDestroy() {
  }

}
