import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetExpensePage } from '../set-expense/set-expense';
import { StorageServiceProvider } from '../../providers/storage-service/storage-service';
import { User } from '../../models/user';
import { CommonServiceProvider } from '../../providers/common-service/common-service';

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
export class SetIncomePage implements OnInit {
  max_categories_count:number = 5;
  categories:any[]=[];
  category_Amount:any[]=[];
  transformed_category_amount:any[]=[];
  userData:User;
  budgetName:string='';
  constructor(public navCtrl: NavController,private storageService:StorageServiceProvider,
              public navParams: NavParams,private commonService:CommonServiceProvider) {
  }

  async ngOnInit() {
    this.userData = await this.storageService.getUserDetails();
    this.category_Amount = [];
    this.setCategories();
    this.budgetName = this.navParams.data;
  }
  

  setCategories() {
    this.categories = ['Salary','Bonus'];
    this.categories.forEach(() => {
    this.commonService.transform_to_currency(0).then(
        (result) => {
          this.category_Amount.push(result);
        }
      );
    });
  }

  onAddIncomeCategory() {
    if(this.categories.length < this.max_categories_count)
      this.categories.push('Category ...');
  }


  onNextClick() {
    let transformed_category_amount = [];
    this.category_Amount.forEach(amount => {
      transformed_category_amount.push(this.commonService.transform_currency_to_decimal(amount));
    });
    
    this.storageService.addIncomeToBudget(this.categories,transformed_category_amount).then(
      () => {
        this.category_Amount = [];
        this.navCtrl.push(SetExpensePage);
      }
    );
    
  }

  onRemoveCategory(index:number) {
    this.categories.splice(index,1);
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  setCurrency(index:number) {
    if(Number(this.category_Amount[index])){
      this.category_Amount[index] = this.commonService.
      transform_to_decimal(this.category_Amount[index]).replace(',','').replace(this.userData.currencyId,'');
      
      this.commonService.transform_to_currency(this.category_Amount[index]).then(
        (result) => {
          this.category_Amount[index] = result;
        }
      );
    }
  }
}
