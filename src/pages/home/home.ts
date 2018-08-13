import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { BudgetCreatePage } from '../budget-create/budget-create';
import { DateServiceProvider } from '../../providers/date-service/date-service';
import { CategoryServiceProvider } from '../../providers/category-service/category-service';
import { AddIncomeComponent } from '../../components/add-income/add-income';
import { AddExpenseComponent } from '../../components/add-expense/add-expense';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  progressPercent:number;
  totalIncome :number;
  totalExpense:number;
  balance:number;
  ionCatList:any[];
  incomeCategories:any[];
  expenseCategories:any[];

  constructor(public navCtrl: NavController, private modCtrl:ModalController,
    private dateService:DateServiceProvider,private categoriesService:CategoryServiceProvider) {
    this.initializeHome();
  }

  initializeHome() {
    this.totalIncome = 6200;
    this.totalExpense = 5420;
    this.balance = this.totalIncome - this.totalExpense;
    this.progressPercent = (this.balance/ this.totalIncome)*100;

    this.incomeCategories = this.categoriesService.getIncomeCategories();
    this.expenseCategories = this.categoriesService.getExpenseCategories();

    this.ionCatList = [{title:"Income",categories:this.incomeCategories},
    {title:"Expense",categories:this.expenseCategories,open:'open'}];
  }

  setHeaderText() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    return this.dateService.getMonthText(month)+" "+year;
    
  }

  onNewBudget() {
    this.navCtrl.push(BudgetCreatePage);
  }

  toggleSection(i) {
    this.ionCatList[i].open = !this.ionCatList[i].open;
  }

  onActionClick(transaction_type:string,category:string) {
    console.log(transaction_type,category);
    let profileModal = null;
    if(transaction_type.toLowerCase() === 'income') {
      profileModal =this.modCtrl.create(AddIncomeComponent, { category: category });
    }
    
    if(transaction_type.toLowerCase() === 'expense') {
      profileModal =this.modCtrl.create(AddExpenseComponent, { category: category });
    }

    if(profileModal)
      profileModal.present();
  }

}
