import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-daily-routine',
  templateUrl: './daily-routine.component.html',
  styleUrls: ['./daily-routine.component.css']
})
export class DailyRoutineComponent implements OnInit {
  dailyRoutine;
  activeUser;
  check;
  allData;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.activeUser = this.dataService.getActiveUserFromlocal();
    console.log(this.activeUser);
    this.allData = this.dataService.getFromLocal(this.activeUser).listData;
    const checkedDaily = [...this.allData.filter(ele => ele.type === 'Daily routine')];
    checkedDaily.map(item => item.checked = true);
    if (checkedDaily.length > 0) {
      const originalDataArray = [...this.dataService.getDailyData()];
      this.dailyRoutine  = originalDataArray.map(item => {
        const found = checkedDaily.find(innerItem => innerItem.data === item.data);
        if (found) {
          return found;
        } else {
          return item;
        }
      });
    } else {
      this.dailyRoutine = this.dataService.getDailyData();
    }
  }
  onClick = (event , item) => {
    if (event.checked){
      const activeUserData = this.dataService.getFromLocal(this.activeUser);
      activeUserData.listData.push({type: `Daily routine`, data: item});
      this.dataService.setInLocal(this.activeUser, activeUserData);
    }else {
      const removeActiveUserData = this.dataService.getFromLocal(this.activeUser);
      const foundIndex = removeActiveUserData.listData.findIndex(e => e.data === item);
      if (foundIndex > -1){
        removeActiveUserData.listData.splice(foundIndex, 1);
        this.dataService.setInLocal(this.activeUser, removeActiveUserData);
      }else {
      console.log('errrrrrrrrrrror');

      }

    }

  }

}
