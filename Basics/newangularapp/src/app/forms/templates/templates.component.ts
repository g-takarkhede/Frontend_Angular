import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.css'
})
export class TemplatesComponent {

  studentObj: any = {
    firstname: '',
    lastname: '',
    username: '',
    city: '',
    state: '',
    zipcode: '',
    isAcceptTerms: false
  }


  formValue: any;
  onSubmit() {
    debugger;
    this.formValue = this.studentObj;
  }

  onReset() {
    this.studentObj = {
      firstname: '',
      lastname: '',
      username: '',
      city: '',
      state: '',
      zipcode: '',
      isAcceptTerms: false
    }

  }
}
