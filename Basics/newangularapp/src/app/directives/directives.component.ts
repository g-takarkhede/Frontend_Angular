import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  isCont1Visible: boolean = true
  isCont2Visible: boolean = true

  num1: string = ''
  num2: string = ''

  isActive: boolean = false

  selectedState: string = ''
  
  customStyle: any = {
    'color': 'white',
    'background-color': 'red',
    'height': '100px',
    'width' : "100px",
    'border-radius' : '50%',
    'justify-content' : 'center',
    'display' : 'flex',
    'align-items' : 'center'
  }


  cityArray: string[] = ["Pune", "Amravati", "Nagpur", "Mumbai"]

  studentList: any[] = [
    { name: "AA", rollNo: 11, isActive: true, totalMarks: 50 },
    { name: "BB", rollNo: 22, isActive: true, totalMarks: 77 },
    { name: "CC", rollNo: 31, isActive: false, totalMarks: 90 },
    { name: "DD", rollNo: 43, isActive: true, totalMarks: 87 },
    { name: "EE", rollNo: 55, isActive: true, totalMarks: 45 }
  ]

  div1BgColor: string = "bg-primary";
  isDiv2Active: boolean = true;


  showCont1() {
    this.isCont1Visible = true
  }
  hideCont1() {
    this.isCont1Visible = false
  }

  toggleCont2() {
    this.isCont2Visible = !this.isCont2Visible
  }

  addRedClass(){
      this.div1BgColor = "bg-danger"
  }
  addBlueClass(){
      this.div1BgColor = "bg-primary"
  }
}
