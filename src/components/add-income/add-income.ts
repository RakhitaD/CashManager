import { Component } from '@angular/core';
import { NavParams, ViewController } from "ionic-angular";

/**
 * Generated class for the AddIncomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-income',
  templateUrl: 'add-income.html'
})
export class AddIncomeComponent {

  category: string;
  constructor(private params:NavParams,public viewCtrl:ViewController) {
    this.category = this.params.get('category');
    console.log(this.category );
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
