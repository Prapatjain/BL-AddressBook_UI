import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-person-modal',
  templateUrl: './add-person-modal.component.html',
  styleUrls: ['./add-person-modal.component.css']
})
export class AddPersonModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() personAdded = new EventEmitter<any>();

  person = {
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
  };

  addPerson() {
    if (this.person.phone.length !== 10) {
      alert('Phone number must be exactly 10 digits.');
      return;
    }
    this.personAdded.emit(this.person);
    this.resetForm();
  }

  resetForm() {
    this.person = {
      fullName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
    };
  }

  closeModal() {
    this.close.emit();
  }
}
