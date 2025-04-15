import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {

  isDivVisible: boolean = false
  num1: string = ''
  num2: string = ''

  toggleDiv(){
    this.isDivVisible = !this.isDivVisible
  }
}
