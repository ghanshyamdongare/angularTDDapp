import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundamentals',
  templateUrl: './fundamentals.component.html',
  styleUrls: ['./fundamentals.component.scss']
})
export class FundamentalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

export function compute(number: number) {
  if (number < 0) {
    return 0;
  }
  return number + 1;
}

export function greet(name) {
  return "Welcome " + name;
}

export function getCurrencies() {
  return ['USD', 'POUND', 'AUD', 'EURO'];
}
