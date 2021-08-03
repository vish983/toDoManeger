import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

 workData = [
   {checked: false, data: 'Do car wash'},
   {checked: false, data: 'Do cloth shopping'},
   {checked: false, data: 'Do grocery shopping'},
   {checked: false, data: 'Make food'},
   {checked: false, data: 'shopping4'}
  ];

 dailyData = [
  {checked: false, data: 'Morning walk'},
  {checked: false, data: 'Exercise'},
  {checked: false, data: 'Eat healthy'},
  {checked: false, data: 'Evening walk'},
  {checked: false, data: 'Sleep enough'}
 ];

 lifestyleData = [
   {checked: false, data: 'Swimming'},
   {checked: false, data: 'Driving'},
   {checked: false, data: 'Partying'},
   {checked: false, data: 'Exotic food'},
   {checked: false, data: 'Driving123' }
  ];

  constructor() {}
  getWorkData = () => {
    return this.workData;
  }
  getDailyData = () => {
    return this.dailyData;
  }
  getLifestyleData = () => {
    return this.lifestyleData;
  }
  // =============================LOCAL SERVICE=========================
  getFromLocal = (key) => {
    return JSON.parse(localStorage.getItem(key));
  }
  setInLocal = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
  }
  removeFromLocal = (key) => {
    return localStorage.removeItem(key);
  }
  removeAllFromLocal = () => {
    return localStorage.clear();
  }
  getActiveUserFromlocal = () => {
    return JSON.parse(localStorage.getItem('activeUser'));
  }
  // =============================LOCAL SERVICE=========================
}


