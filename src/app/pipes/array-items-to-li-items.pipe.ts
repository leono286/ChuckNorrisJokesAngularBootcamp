import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayItemsToLiItems'
})
export class ArrayItemsToLiItemsPipe implements PipeTransform {

  transform(value: string[]): string {

    let htmlText = '';

    if (value) {

      value.map(item => {
        console.log(item);
        htmlText += `<li>${item}</li>`;
      });
    }

    return htmlText;
  }

}
