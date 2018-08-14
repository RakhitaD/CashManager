import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { StorageServiceProvider } from '../../providers/storage-service/storage-service';
import { CommonServiceProvider } from '../../providers/common-service/common-service';
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
export class SetExpensePage implements OnInit  {
  categories:any[]=[];
  max_categories_count:number = 10;
  category_Amount:any[]=[];
  userData:User;
  budgetName:string='';
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storageService:StorageServiceProvider,private commonService:CommonServiceProvider) {
  }

  async ngOnInit() {
    this.userData = await this.storageService.getUserDetails();
    this.category_Amount = [];
    this.setCategories();
    this.budgetName = this.navParams.data;
  }

  setCategories() {
    this.categories = ['Rent','Electricity','Bills','Transport','Financial Obligations'];
    this.categories.forEach(() => {
      this.commonService.transform_to_currency(0).then(
          (result) => {
            this.category_Amount.push(result);
          }
        );
      });
  }

  ionViewDidLoad() {
  }

  onFinish() {
    let transformed_category_amount = [];
    this.category_Amount.forEach(amount => {
      transformed_category_amount.push(this.commonService.transform_currency_to_decimal(amount));
    });

    this.storageService.addExpenseToBudget(this.categories,transformed_category_amount).then(
      () => {
        this.category_Amount = [];
        this.navCtrl.popToRoot();
      }
    );
  }

  onAddExpenseCategory() {
    if(this.categories.length < this.max_categories_count)
      this.categories.push('New Category... ');
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
