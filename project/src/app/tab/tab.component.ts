import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
@Input()
book:any;
@Input()
idx:number=0;
currentTab = 1;
  constructor() { }

  ngOnInit(): void {
  }
  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex; //we dont try to load the event when thats the current tab it remains the same
    }
    onTabChange(event:any, tabIndex:number) {
      event.preventDefault(); // to stop flicker of the whole page
      this.currentTab = tabIndex;
      console.log('tab selected: ' + this.currentTab);
    }
}
