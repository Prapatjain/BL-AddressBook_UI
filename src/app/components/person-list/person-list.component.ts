// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-person-list',
//   templateUrl: './person-list.component.html',
//   styleUrls: ['./person-list.component.css']
// })
// export class PersonListComponent {
//   personList = [
//     { fullName: 'John Doe', address: '123 Main St', city: 'New York', state: 'NY', zipCode: '10001', phoneNumber: '1234567890' },
//     { fullName: 'Jane Smith', address: '456 Elm St', city: 'Los Angeles', state: 'CA', zipCode: '90001', phoneNumber: '0987654321' }
//   ];

//   isModalOpen = false;

//   openAddPersonModal() {
//     this.isModalOpen = true;
//   }

//   closeAddPersonModal() {
//     this.isModalOpen = false;
//   }

//   deletePerson(person: any) {
//     this.personList = this.personList.filter(p => p !== person);
//   }
// }
//........................

import { Component } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
editPerson(_t16: any) {
throw new Error('Method not implemented.');
}
  persons = this.personService.getPersons();
  showModal = false;

  constructor(private personService: PersonService) {}

  openAddPersonModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  addPerson(person: any) {
    this.personService.addPerson(person);
    this.persons = this.personService.getPersons(); // Refresh data
    this.closeModal();
  }

  deletePerson(phone: string) {
    this.personService.deletePerson(phone);
    this.persons = this.personService.getPersons();
  }
}
