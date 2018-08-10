import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BudgetCreatePage } from '../budget-create/budget-create';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  setHeaderText() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    return this.getMonthText(month)+" "+year;
    
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

  onNewBudget() {
    this.navCtrl.push(BudgetCreatePage);
  }

}
