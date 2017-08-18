import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeekViewComponent } from './week-view/week-view.component';

@NgModule({
  declarations: [
    AppComponent,
    WeekViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
