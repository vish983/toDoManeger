import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './components/start-page/start-page.component';
import { UserDonePageComponent } from './components/user-done-page/user-done-page.component';

const routes: Routes = [
  {path: '', component: StartPageComponent},
  {path: 'user', component: UserDonePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
