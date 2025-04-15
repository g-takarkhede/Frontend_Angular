import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactives',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactives.component.html',
  styleUrl: './reactives.component.css'
})
export class ReactivesComponent {
 studentForm : FormGroup = new FormGroup({
  firstname : new FormControl("", [Validators.required, Validators.minLength(3)]),
  lastname : new FormControl(""),
  username : new FormControl(""),
  city : new FormControl("Pune"),
  state : new FormControl(""),
  zipcode : new FormControl(""),
  isAcceptTerms : new FormControl("")
 })

 formValue : any;

 onSave(){
  this.formValue = this.studentForm.value;
 }
}
