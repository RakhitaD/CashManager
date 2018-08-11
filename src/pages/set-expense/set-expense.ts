import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the SetExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-expense',
  templateUrl: 'set-expense.html',
})
export class SetExpensePage {
  categories:any[]=[];
  max_categories_count:number = 7;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.setCategories();
  }

  setCategories() {
    this.categories = ['Rent','Electricity','Bills','Transport','Financial Obligations'];
  }

  ionViewDidLoad() {
  }

  onFinish() {
    this.navCtrl.popToRoot();
  }

  onAddExpenseCategory() {
    if(this.categories.length < this.max_categories_count)
      this.categories.push('New Category... ');
  }
}
