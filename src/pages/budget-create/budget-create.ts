import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '../../../node_modules/@ionic-native/date-picker';
import { SetIncomePage } from '../set-income/set-income';
import { DateServiceProvider } from '../../providers/date-service/date-service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,private datePicker:DatePicker,private dateService:DateServiceProvider) {
    this.initializeBudgetDates();
  }

  initializeBudgetDates() {
    let today = new Date();
    let startDate:Date;
    let endDate:Date;
    startDate = new Date(today.getFullYear(),today.getMonth(),1);
    endDate = new Date(today.getFullYear(),today.getMonth(),new Date(today.getFullYear(),today.getMonth(),0).getDate());

    this.budgetStartDate = this.dateService.formatDate(startDate);
    this.budgetEndDate = this.dateService.formatDate(endDate);
  }

  ionViewDidLoad() {

  }

  setStartDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date => {
          this.budgetStartDate = this.dateService.formatDate(date);
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  setEndDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date => {
          this.budgetEndDate = this.dateService.formatDate(date);
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  onNextClick() {
    this.navCtrl.push(SetIncomePage);
  }

}
