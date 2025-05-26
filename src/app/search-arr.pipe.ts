import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArr',
})
export class SearchArrPipe implements PipeTransform {
  transform(value: any[], searchText: string): any[] {
    if (searchText == '') return value;
    var filteredArr = value.filter((element) => {
      if (element.productName.toString().includes(searchText)) {
        return element;
      }
    });
    return filteredArr;
  }
}
