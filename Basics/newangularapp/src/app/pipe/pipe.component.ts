import { AsyncPipe, CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable, map} from 'rxjs';
import { CustomPipePipe } from '../custom_pipes/custom-pipe.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CustomPipePipe, AsyncPipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, PercentPipe, CurrencyPipe, JsonPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
   text : string = "I am a good girl"
   curDate : Date = new Date();
   num : number = 7;

   currentTime :Observable<Date> = new Observable();


   student: any = {
    name : 'Gauri',
    age : 22,
    empId : 232
   }
  
   checkPipe = null;

   constructor(){
    this.currentTime = interval(1000).pipe(map(()=>new Date()));
   }
}
