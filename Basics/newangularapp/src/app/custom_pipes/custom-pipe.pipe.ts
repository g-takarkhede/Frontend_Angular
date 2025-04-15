import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true
})
export class CustomPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value!== undefined && value!== null && value!==''){
      return value;
    }
    else{
      return "NA";
    }
  }

}
