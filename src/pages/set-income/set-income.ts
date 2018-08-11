import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetExpensePage } from '../set-expense/set-expense';

/**
 * Generated class for the SetIncomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-income',
  templateUrl: 'set-income.html',
})
export class SetIncomePage {
  categories:any[]=[];
  max_categories_count:number = 5;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.setCategories();
  }

  setCategories() {
    this.categories = ['Salary','Bonus'];
  }

  onAddIncomeCategory() {
    if(this.categories.length < this.max_categories_count)
      this.categories.push('New Category... ');
  }

  onNextClick() {
    this.navCtrl.push(SetExpensePage);
  }

}
