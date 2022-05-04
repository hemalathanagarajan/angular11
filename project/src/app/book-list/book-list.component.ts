import { Component, OnInit } from '@angular/core';
import { BooksdaoService } from '../booksdao.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  title = 'Financial Books';
  currentTab = 1;// global variable which will increments
  books:Array<any> =[
   
  ];
  constructor(private booksvc:BooksdaoService) { }

  ngOnInit(): void {
    this.books = this.booksvc.getBooks(); // this is what we written in bookservicesdao ts file

  }
  onbuy(book:any) {
    console.log('Book added to cart.....'+ book.name + ' ' +  book.price);
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

// import { Component, OnInit } from '@angular/core';
// import { BooksdaoService} from "../booksdao.service"

// @Component({
//   selector: 'app-book-list',
//   templateUrl: './book-list.component.html',
//   styleUrls: ['./book-list.component.css']
// })
// export class BookListComponent implements OnInit {

//   constructor( private booksvc:BooksdaoService) { }

//   ngOnInit(): void {
//     this.books = this.booksvc.getBooks(); // this is what we written in bookservicesdao ts file
//   }
// onbuy(book:any) {
//   console.log('Book added to cart.....'+ book.name + ' ' +  book.price);
// }
// isTabSelected(tabIndex: number) {
// return this.currentTab === tabIndex; //we dont try to load the event when thats the current tab it remains the same
// }
// onTabChange(event:any, tabIndex:number) {
//   event.preventDefault(); // to stop flicker of the whole page
//   this.currentTab = tabIndex;
//   console.log('tab selected: ' + this.currentTab);
// }
// }
