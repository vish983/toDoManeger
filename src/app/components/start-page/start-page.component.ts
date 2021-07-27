import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  toDologin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });
  constructor(private routes: Router) { }

  ngOnInit(): void {
  }
  login = () => {
    console.log('icon clicked');
    this.routes.navigateByUrl('/user');
    localStorage.setItem('Email', this.toDologin.get('email').value);
  }

}
