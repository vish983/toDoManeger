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
  allWork = [];
  activeUser;
  // activeUserData;
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
     this.workData = this.dataservice.getWorkData();
     this.activeUser = this.dataservice.getActiveUserFromlocal();
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
