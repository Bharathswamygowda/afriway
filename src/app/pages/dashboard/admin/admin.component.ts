import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  list = [
    {
      url: '/assets/images/cipla.png',
      buttontext: 'view'
    },
    {
      url: '/assets/images/2.png',
      buttontext: 'Pending'
    },
    {
      url: '/assets/images/3.png',
      buttontext: 'view'
    },
    {
      url: '/assets/images/4.png',
      buttontext: 'view'
    },
    {
      url: '/assets/images/5.png',
      buttontext: 'Pending'
    },
  ]


  analytics = [
    {
      text: 'Approval Pending',
      count: '03'
    },

    {
      text: 'Shortlist',
      count: '45'
    },

    {
      text: 'Business Plan',
      count: '78'
    },

    {
      text: 'Signed agreement',
      count: '82'
    },
    {
      text: 'Classified',
      count: '05'
    },

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
