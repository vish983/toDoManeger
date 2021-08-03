import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css']
})
export class LifestyleComponent implements OnInit {

  lifeStyleData;
  checking;
  allData;
  activeUser;

  constructor(private dataservice: DataService, private router: Router) {
    if (this.dataservice.getFromLocal('activeUser')){
      // all good
    } else {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.activeUser = this.dataservice.getActiveUserFromlocal();
    console.log(this.activeUser);
    this.allData = this.dataservice.getFromLocal(this.activeUser).listData;
    const checkedLifeStyle = [...this.allData.filter(ele => ele.type === 'Lifestyle')];
    checkedLifeStyle.map(item => item.checked = true);
    if (checkedLifeStyle.length > 0) {
      const originalDataArray = [...this.dataservice.getLifestyleData()];
      this.lifeStyleData  = originalDataArray.map(item => {
        const found = checkedLifeStyle.find(innerItem => innerItem.data === item.data);
        if (found) {
          return found;
        } else {
          return item;
        }
      });
    } else {
      this.lifeStyleData = this.dataservice.getLifestyleData();
    }
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
