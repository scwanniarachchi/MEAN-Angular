import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,search:String) {
    if (value.length === 0||search==='') { 
      return value
    }
    
    const items = [];
    for (const data of value) {
      if (data['name'].toLowerCase().includes(search.toLowerCase())) {
        items.push(data)
      }
    }
    return items
  }

}
