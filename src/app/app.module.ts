// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { NavbarComponent } from './components/navbar/navbar.component';
// import { PersonListComponent } from './components/person-list/person-list.component';
// import { AddPersonModalComponent } from './components/add-person-modal/add-person-modal.component';
//.....
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { AddPersonModalComponent } from './components/add-person-modal/add-person-modal.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     NavbarComponent,
//     PersonListComponent,
//     AddPersonModalComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
//....
@NgModule({
  declarations: [AppComponent, NavbarComponent, PersonListComponent, AddPersonModalComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
