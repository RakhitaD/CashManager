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

  constructor(public navCtrl: NavController, public navParams: NavParams,private datePicker:DatePicker) {
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

}
