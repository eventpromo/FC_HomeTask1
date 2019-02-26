import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'cut'})
export class CutPipe implements PipeTransform {
  transform(value: string, size: number): string {
    if (!value) {
      return value;
    }
    const str = value.substring(0, size);
    if (str == value) {
      return str;
    } else {
      return `${str}...`;
    }
  }
}