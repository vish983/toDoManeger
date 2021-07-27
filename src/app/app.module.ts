import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartPageComponent } from './components/start-page/start-page.component';
import { UserDonePageComponent } from './components/user-done-page/user-done-page.component';
import { WorkTodoComponent } from './components/work-todo/work-todo.component';
import { ShoppingTodoComponent } from './components/shopping-todo/shopping-todo.component';
import { DailyRoutineComponent } from './components/daily-routine/daily-routine.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    UserDonePageComponent,
    WorkTodoComponent,
    ShoppingTodoComponent,
    DailyRoutineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
