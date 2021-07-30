import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css']
})
export class LifestyleComponent implements OnInit {
  lifeStyleData;
  checking;
  activeUser;
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.lifeStyleData = this.dataservice.getLifestyleData();
    this.activeUser = this.dataservice.getActiveUserFromlocal();
    console.log(this.activeUser);
  }
  onCheckPerform = (event, item) => {

    if (event.checked){
      const activeUserData = this.dataservice.getFromLocal(this.activeUser);
      activeUserData.listData.push({type: 'Lifestyle', data: item});
      this.dataservice.setInLocal(this.activeUser, activeUserData);
    }else {
      const removeUserData = this.dataservice.getFromLocal(this.activeUser);
      const foundIndex = removeUserData.listData.findIndex(a => a.data === item);
      if (foundIndex > -1){
        removeUserData.listData.splice(foundIndex, 1 );
        this.dataservice.setInLocal(this.activeUser, removeUserData);
      }else {
        console.log(`EROOOOOOOR`);
      }
    }

  }
}
