import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetExpensePage } from '../set-expense/set-expense';
import { Storage } from '@ionic/storage';

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
  outputTest:string=''
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
    this.setCategories();

    // this.storage.get('budget_name').then((val) => {
    //   console.log('Your budget name is', val);
    //   this.outputTest = 'Your budget name is'+ val;
    // });
  }

  setCategories() {
    this.categories = ['Salary','Bonus'];
  }

  onAddIncomeCategory() {
    if(this.categories.length < this.max_categories_count)
      this.categories.push('Category ...');
  }

  onNextClick() {
    this.navCtrl.push(SetExpensePage);
  }

  onRemoveCategory(index:number) {
    this.categories.splice(index,1);
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }
}
