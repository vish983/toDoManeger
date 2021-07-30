import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  toDologin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });
  constructor(private router: Router, private dataservice: DataService) { }

  ngOnInit(): void {
  }
  login = () => {
   if (this.dataservice.getFromLocal(this.toDologin.controls.email.value)) {
     // found user
   } else {
     // not found or new user
     this.dataservice.setInLocal(this.toDologin.controls.email.value, {
       email: this.toDologin.controls.email.value,
       listData: []
     });
   }

   // setting active user
   this.dataservice.setInLocal('activeUser', this.toDologin.controls.email.value);

   // navigating to list
   this.router.navigate(['/list']);
  }

}
