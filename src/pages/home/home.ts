import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BudgetCreatePage } from '../budget-create/budget-create';
import { DateServiceProvider } from '../../providers/date-service/date-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  progressPercent:number;
  constructor(public navCtrl: NavController,private dateService:DateServiceProvider) {
    this.progressPercent =20;
  }

  setHeaderText() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    return this.dateService.getMonthText(month)+" "+year;
    
  }

  onNewBudget() {
    this.navCtrl.push(BudgetCreatePage);
  }

}
