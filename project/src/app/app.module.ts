import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxaComponent } from './boxa/boxa.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CountDisplayComponent } from './count-display/count-display.component';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { HitButtonComponent } from './hit-button/hit-button.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { BookCatlogComponent } from './book-catlog/book-catlog.component';
import { BookComponent } from './book/book.component';
import { TabComponent } from './tab/tab.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';
const routes:Routes=[
  {path: '',component:HomeComponent},
  {path: 'boxa',component:BoxaComponent},
  {path: 'books',component:BookCatlogComponent},
  // {path:'addBook',component:BookformComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BoxaComponent,
    CustomerFormComponent,
    CountDisplayComponent,
    CounterAppComponent,
    HitButtonComponent,
    ParentComponent,
    ChildComponent,
    EmployeeFormComponent,
    HomeComponent,
    MenuComponent,
    NewsComponent,
    BookCatlogComponent,
    BookComponent,
    TabComponent,
    PriceDiscountPipe,
    BookFormComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
