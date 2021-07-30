import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//  todoWork = [{
//    work: 'Morning',
//    daily: 'wake-up',
//    lifestyle: 'Driving'},

//    {
//     work: '',
//     daily: 'wake-up',
//     lifestyle: 'Driving'
//    },
//    {
//     work: 'shopping2',
//     daily: 'wake-up',
//     lifestyle: 'Driving'
//    },
//    {
//     work: 'shopping3',
//     daily: 'wake-up',
//     lifestyle: 'Driving'
//    },
//    {
//     work: 'shopping4',
//     daily: 'wake-up',
//     lifestyle: 'Driving'
//    },
//  ];
 workData = ['Do car wash', 'Do cloth shopping', 'Do grocery shopping', 'Make food', 'shopping4'];
 dailyData = ['Morning walk', 'Exercise', 'Eat healthy', 'Evening walk', 'Sleep enough' ];
 lifestyleData = ['Swimming', 'Driving', 'Partying', 'Exotic food', 'Driving'  ];

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


