import { Component } from '@angular/core';
import { NavParams, ViewController } from "ionic-angular";

/**
 * Generated class for the AddExpenseComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-expense',
  templateUrl: 'add-expense.html'
})
export class AddExpenseComponent {

  category: string;
  constructor(private params:NavParams,public viewCtrl:ViewController) {
    this.category = this.params.get('category');
    console.log(this.category);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
