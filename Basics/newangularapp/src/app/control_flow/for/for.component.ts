import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

  cityArray: string[] = ["Pune", "Amravati", "Nagpur", "Mumbai"]

  studentList: any[] = [
    { name: "AA", rollNo: 11, isActive: true, totalMarks: 50 },
    { name: "BB", rollNo: 22, isActive: true, totalMarks: 77 },
    { name: "CC", rollNo: 31, isActive: false, totalMarks: 90 },
    { name: "DD", rollNo: 43, isActive: true, totalMarks: 87 },
    { name: "EE", rollNo: 55, isActive: true, totalMarks: 45 }
  ]

 

}
