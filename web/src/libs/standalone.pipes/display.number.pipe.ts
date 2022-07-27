import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayNumber',
  standalone: true
})
export class DisplayNumberPipe implements PipeTransform {

  transform(value: number): number {
    return value ?? 0;
  }

}
