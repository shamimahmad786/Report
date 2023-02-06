import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(reportsList : any, areaname: string) 
  {
    
    if(areaname=='school' || areaname=='teacher' || areaname=='enrollment')
    {
      return reportsList.filter((listing: any) => listing.reportdomain === areaname);
    }
    else
    {
      return reportsList
    }
  
  }

}
