import { Component } from '@angular/core';
import { WeekViewComponent } from './week-view/week-view.component';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@NgModule({
  imports: [
    WeekViewComponent,
    NgModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppComponent {}
