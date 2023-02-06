import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tablePipe'
})
export class TablePipePipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any {
    if (!value) {
      return items;
    }else if(value=="All"){
      return items;
    }
    return items.filter(singleItem => singleItem[field].toLowerCase().includes(value.toLowerCase()));;
  }

}
