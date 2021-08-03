import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-work-todo',
  templateUrl: './work-todo.component.html',
  styleUrls: ['./work-todo.component.css']
})
export class WorkTodoComponent implements OnInit {
  workData;
  complete;
  allData;
  activeUser;
  // activeUserData;
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.activeUser = this.dataservice.getActiveUserFromlocal();
    console.log(this.activeUser);
    this.allData = this.dataservice.getFromLocal(this.activeUser).listData;
    const checkedDaily = [...this.allData.filter(ele => ele.type === 'work')];
    checkedDaily.map(item => item.checked = true);
    if (checkedDaily.length > 0) {
      const originalDataArray = [...this.dataservice.getWorkData()];
      this.workData  = originalDataArray.map(item => {
        const found = checkedDaily.find(innerItem => innerItem.data === item.data);
        if (found) {
          return found;
        } else {
          return item;
        }
      });
    } else {
      this.workData = this.dataservice.getWorkData();
    }
  }

  onChangeCheckbox = (event, item) => {
    if (event.checked){
      const activeUserData = this.dataservice.getFromLocal(this.activeUser);
      activeUserData.listData.push({type: 'work', data: item});
      this.dataservice.setInLocal(this.activeUser, activeUserData);
    }else{
      const removeActiveUserData = this.dataservice.getFromLocal(this.activeUser);
      const foundIndex = removeActiveUserData.listData.findIndex(element => element.data === item);
      if (foundIndex > -1) {
        removeActiveUserData.listData.splice(foundIndex, 1 );
        this.dataservice.setInLocal(this.activeUser, removeActiveUserData);
      } else {
        console.log('notfound');
      }
      console.log({...removeActiveUserData});
      // this.dataservice.setInLocal(this.activeUser, removeActiveUserData);
      // console.log(index);
    }
  }
}
