import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private storageKey = 'persons';

  getPersons() {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addPerson(person: any) {
    const persons = this.getPersons();
    persons.push(person);
    localStorage.setItem(this.storageKey, JSON.stringify(persons));
  }

  deletePerson(phone: string) {
    let persons = this.getPersons();
    persons = persons.filter((p: any) => p.phone !== phone);
    localStorage.setItem(this.storageKey, JSON.stringify(persons));
  }
}
