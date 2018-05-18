import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable-component/observable.component';
import { SubjectComponent } from './subject-component/subject.component';
import { BehaviorComponent } from './behavior-component/behavior.component';
import { ReplayComponent } from './replay-component/replay.component';
import { OperatorsComponent } from './operators/operators.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    SubjectComponent,
    BehaviorComponent,
    ReplayComponent,
    OperatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
