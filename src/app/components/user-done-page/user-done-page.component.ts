import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-done-page',
  templateUrl: './user-done-page.component.html',
  styleUrls: ['./user-done-page.component.css']
})
export class UserDonePageComponent implements OnInit {
  workDone;
  activeUser;
  constructor(private routes: Router, private active: DataService) { }

  ngOnInit(): void {
    this.activeUser = this.active.getActiveUserFromlocal();
  }
  onclick = () => {
    this.routes.navigateByUrl('/result');
  }
}

