import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookTitleTrim'
})
export class BookTitleTrimPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const regex = /\(([^\)]+)\)/g;
    const title = value;
    return title.split(regex)[0];
  }

}
