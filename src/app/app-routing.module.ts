import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ObservableComponent } from './observable-component/observable.component';
import { SubjectComponent } from './subject-component/subject.component';
import { BehaviorComponent } from './behavior-component/behavior.component';
import { ReplayComponent } from './replay-component/replay.component';
import { OperatorsComponent } from './operators/operators.component';

const routes: Routes = [
  { path: 'observable', component: ObservableComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'behavior', component: BehaviorComponent },
  { path: 'replay', component: ReplayComponent },
  { path: 'operators', component: OperatorsComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
