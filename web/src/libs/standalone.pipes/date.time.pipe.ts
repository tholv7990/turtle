import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'dateTime',
  standalone: true
})
export class DateTimePipe implements PipeTransform {

  transform(value: DateTime, type = null): unknown {
    switch(type){
      case 'date': {
        return  value.toLocaleString(DateTime.DATE_SHORT);
      }
      case 'time': {
        return value.toLocaleString(DateTime.TIME_SIMPLE);
      }
      default: 
      return value.toLocaleString(DateTime.DATETIME_SHORT);
    }
  }

}
