import { Component } from '@angular/core';
import { NavParams, ViewController } from "ionic-angular";
import { CategoryServiceProvider } from '../../providers/category-service/category-service';

/**
 * Generated class for the EditIncomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'edit-income',
  templateUrl: 'edit-income.html'
})
export class EditIncomeComponent {

  categories:any[]=[];
  category: string;
  category_id:number;
  constructor(private params:NavParams,public viewCtrl:ViewController,private categoryService:CategoryServiceProvider) {
    this.categories = this.categoryService.getIncomeCategories();
    this.category_id = this.params.get('category_index');
    this.category = this.categories[this.category_id];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
