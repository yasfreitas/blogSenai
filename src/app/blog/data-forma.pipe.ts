import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataForma',
  standalone: true
})
export class DataFormaPipe implements PipeTransform {

  transform(value: Date | string): string {
    if (!value) return '';

    const date = new Date(value);
    const day = date.getUTCDate();
    const month = date.toLocaleString('pt-BR', {month: 'short', timeZone: 'UTC'}).toUpperCase();

    return `${day} ${month}`;
  }

}
