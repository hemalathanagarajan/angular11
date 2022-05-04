import { Component, Input, OnDestroy, OnInit ,SimpleChanges,OnChanges ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy, OnChanges ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
counter = 0;
interval:any;
@Input()
channelName="";
  constructor() { console.log("child constructor works"); }

  ngOnInit(): void {
    console.log("child onit is called");

  }
  ngOnDestroy(): void {
    // clearInterval(this.interval);
    console.log("child destroys");

  }
  ngOnChanges(changes:SimpleChanges):void {
    console.log(changes);
    console.log("child onchanges");
  }
  ngDoCheck() {
    console.log("child do check ");
  }
  ngAfterContentInit(): void {
    console.log(" child ng after content init works");
  }
  ngAfterContentChecked(): void {
    console.log(" child ng after content checked");
  }
  ngAfterViewInit(): void {
    console.log(" child ng after view init ");
  }
  ngAfterViewChecked(): void {
    console.log("child ng after view checked");
  }

}
