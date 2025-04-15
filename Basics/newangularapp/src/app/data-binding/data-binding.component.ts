import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName: string = "Angular 18"
  rollno: number = 123
  name = "Gauri"
  className: string = "temp"
  inputType: string = "text"
  stateName = "Goa"
  isIndian: boolean = false

  constructor( private router: Router){

  }

  showAlert(msg: string) {
    alert(msg)
  }

  changeCourseName(curName: string) {
    console.log(curName)
    if (curName == "Angular 18") {
      this.courseName = "React js"
    }
    else {
      this.courseName = "Angular 18"
    }
  }

  goToDirectives(){
   this.router.navigateByUrl('directives')
  }
}

