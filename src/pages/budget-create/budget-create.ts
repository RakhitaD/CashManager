import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SetIncomePage } from '../set-income/set-income';
import { DateServiceProvider } from '../../providers/date-service/date-service';
import { StorageServiceProvider } from '../../providers/storage-service/storage-service';
import { CommonServiceProvider } from '../../providers/common-service/common-service';

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
  budgetName:string;
  startDate:Date;
  endDate:Date;

  constructor(public navCtrl: NavController,private storageService:StorageServiceProvider,
              private dateService:DateServiceProvider,private commonService:CommonServiceProvider) {
    this.initializeBudgetDates();
    
    this.storageService.deleteTempBudget();
  }

  initializeBudgetDates() {
    let today = new Date();
    this.startDate = new Date(today.getFullYear(),today.getMonth(),1);
    this.endDate = new Date(today.getFullYear(),today.getMonth(),new Date(today.getFullYear(),today.getMonth(),0).getDate());

    this.budgetStartDate = this.dateService.formatDate(this.startDate);
    this.budgetEndDate = this.dateService.formatDate(this.endDate);
  }

  ionViewDidLoad() {

  }

  setStartDate() {
    this.commonService.showDatePicker().then(
      (result) => {
        if(Date.parse(result))
          this.budgetStartDate = this.dateService.formatDate(result);
        else
          this.budgetStartDate = this.dateService.formatDate(this.startDate);
      }
    );
  }

  setEndDate() {
    this.commonService.showDatePicker().then(
      (result) => {
        if(Date.parse(result))
          this.budgetEndDate = this.dateService.formatDate(result);
        else
          this.budgetEndDate = this.dateService.formatDate(this.endDate);
      }
    );
  }

  onNextClick() {
    this.storageService.saveNewBudget(this.budgetName,this.startDate,this.endDate).then(
      () => {
        this.commonService.presentToast('Budget set successfully.');
        
        this.navCtrl.push(SetIncomePage,this.budgetName);
      }
    );
  }

}
