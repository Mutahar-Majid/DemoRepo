import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  displayValue: string;
  selectedTab: number;
  constructor() {
    this.selectedTab = 0;
  }

  ngOnInit(): void {
    this.displayValue =  window.matchMedia('(min-width: 769px)') ?  'block' : 'none';
  }

  toggleContents() {
    this.displayValue = this.displayValue === 'none' ? 'block' : 'none';
  }
  selectTab(tabNum: number){

    this.selectedTab = tabNum;
  }

}
