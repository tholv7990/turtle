import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayText',
  standalone: true
})
export class DisplayTextPipe implements PipeTransform {

  transform(value: string): string {

    return value ?? 'Not Set'

  }

}
