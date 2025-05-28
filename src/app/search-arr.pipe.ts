import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
  name: 'searchArr',
  standalone:false
})
export class SearchArrPipe implements PipeTransform {
 
  transform(value: any[], searchText:string, fieldName: string): any[] {
    if(searchText=="")
      return value;
    if(fieldName=="")
      return value;
    console.log(fieldName);
    var filteredArr= value.filter(element=>{
      if(element[fieldName].toString().toUpperCase().includes(searchText.toUpperCase())){
        return element;
      }
    })
    return filteredArr;
 
    }
 
}
 