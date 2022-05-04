import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,OnDestroy,AfterViewInit,AfterViewChecked{
isChild = false;
channelName='';
  constructor() { console.log("parent constructor works");}

  ngOnInit(): void {
    console.log("parent constructor");
    
  }
  ngOnChanges() {
    console.log(" parent onchanges works");
  }
  ngDoCheck() {
    console.log("parent docheck");
  }
  ngAfterContentInit(): void {
    console.log(" parent   ng after content init works");
  }
  ngAfterContentChecked(): void {
    console.log(" parent ngafter content checked");
  }
  ngAfterViewInit(): void {
    console.log(" parent ngafter view init ");
  }
  ngAfterViewChecked(): void {
    console.log(" parent ngafter view checked");
  }
  ngOnDestroy(): void
  {
   console.log("parent destroys");
  }
  

toggleChild() {
  this.isChild = !this.isChild;
}

}
