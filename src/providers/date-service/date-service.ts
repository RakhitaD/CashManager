import { Injectable } from '@angular/core';

/*
  Generated class for the DateServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DateServiceProvider {

  constructor() {
  }

  formatDate(inputDate:Date):string {
    let dd = inputDate.getDate();
    let mm = inputDate.getMonth()+1;
    let stringDD:string;
    let stringMO:string;
    let stringYY:string;

    let yyyy = inputDate.getFullYear();
    if(dd<10){
      stringDD='0'+dd as string;
    } 
    if(mm<10){
      stringMO='0'+mm;
    } 
    stringYY = dd+'/'+mm+'/'+yyyy;

    return stringYY;
  }

  getMonthText(monthId:number) {

    if(monthId == 0)
      return "January";
    if(monthId == 1)
      return "February";
    if(monthId == 2)
      return "March";
    if(monthId == 3)
      return "April";
    if(monthId == 4)
      return "May";
    if(monthId == 5)
      return "June";
    if(monthId == 6)
      return "July";
    if(monthId == 7)
      return "August";
    if(monthId == 8)
      return "September";
    if(monthId == 9)
      return "October";
    if(monthId == 10)
      return "November";
    if(monthId == 11)
      return "December";
  }

}
