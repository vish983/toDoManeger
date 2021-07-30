import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartPageComponent } from './components/start-page/start-page.component';
import { UserDonePageComponent } from './components/user-done-page/user-done-page.component';
import { WorkTodoComponent } from './components/work-todo/work-todo.component';
import { DailyRoutineComponent } from './components/daily-routine/daily-routine.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { LifestyleComponent } from './components/lifestyle/lifestyle.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ResultComponent } from './components/result/result.component';



@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    UserDonePageComponent,
    WorkTodoComponent,
    DailyRoutineComponent,
    LifestyleComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
