import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '../../../node_modules/@ionic-native/date-picker';

/**
 * Generated class for the BudgetCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-budget-create',
  templateUrl: 'budget-create.html',
})
export class BudgetCreatePage {

  budgetStartDate:string;
  budgetEndDate:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private datePicker:DatePicker) {
    this.initializeBudgetDates();
  }

  initializeBudgetDates() {
    let today = new Date();
    let startDate:Date;
    let endDate:Date;
    startDate = new Date(today.getFullYear(),today.getMonth(),1);
    endDate = new Date(today.getFullYear(),today.getMonth(),new Date(today.getFullYear(),today.getMonth(),0).getDate());

    this.budgetStartDate = this.formatDate(startDate);
    this.budgetEndDate = this.formatDate(endDate);
    console.log(this.budgetStartDate,this.budgetEndDate);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BudgetCreatePage');
  }

  setDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
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

}
