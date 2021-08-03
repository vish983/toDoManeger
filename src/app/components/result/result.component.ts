import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  activeUser;
  userData;
  constructor( private dataService: DataService, private router: Router) { 
    if (this.dataService.getFromLocal('activeUser')){
      // all good
    } else {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.activeUser = this.dataService.getActiveUserFromlocal();
    const incomingUserData = this.dataService.getFromLocal(this.activeUser);
    this.userData = incomingUserData.listData;
    console.log(this.userData);

  }
  logout = () => {
    this.dataService.removeFromLocal('activeUser');
    this.router.navigate(['/']);
  }
  clearAll = () => {
    this.userData = [];
  }

}
