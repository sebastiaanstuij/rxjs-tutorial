import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operator/take';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
  title = 'Operators example';

  constructor() { }

  ngOnInit() {
    const numbers$ = interval(1000);

    numbers$.subscribe(x => console.log(x));
  }

}
