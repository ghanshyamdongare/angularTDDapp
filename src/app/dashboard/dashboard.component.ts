import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  totalVotes: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  upVote() {
    this.totalVotes++;
  }

  downVote() {
    this.totalVotes--;
  }

}
