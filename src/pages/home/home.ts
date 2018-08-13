import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { BudgetCreatePage } from '../budget-create/budget-create';
import { DateServiceProvider } from '../../providers/date-service/date-service';
import { CategoryServiceProvider } from '../../providers/category-service/category-service';
import { AddIncomeComponent } from '../../components/add-income/add-income';
import { AddExpenseComponent } from '../../components/add-expense/add-expense';
import { EditIncomeComponent } from '../../components/edit-income/edit-income';

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

    this.ionCatList = [{title:"Net Disposable Income",categories:this.incomeCategories,income:true},
    {title:"Total Expenditure",categories:this.expenseCategories,open:'open',income:false}];
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
    let incomeExpenseModal = null;
    if(transaction_type.toLowerCase() === 'income') {
      incomeExpenseModal =this.modCtrl.create(AddIncomeComponent, { category: category });
    }
    
    if(transaction_type.toLowerCase() === 'expense') {
      incomeExpenseModal =this.modCtrl.create(AddExpenseComponent, { category: category });
    }

    if(incomeExpenseModal)
      incomeExpenseModal.present();

  }

  showModal(component:Component,category:string) {
    let incomeExpenseModal = this.modCtrl.create(component, { category: category });
    incomeExpenseModal.present();
  }

  onEditIncome(income_category_index:number) {
    
    let  editIncomeModal =this.modCtrl.create(EditIncomeComponent, { category_index: income_category_index });

    if(editIncomeModal)
      editIncomeModal.present();
  }

  onAccordHeaderClick(isIncome:boolean,toggle_index:number) {
    let incomeExpenseModal = null;
    if(isIncome)
      incomeExpenseModal = this.modCtrl.create(AddIncomeComponent, { category: 'New Category' });
    else
      incomeExpenseModal = this.modCtrl.create(AddExpenseComponent, { category: 'New Category' });

    incomeExpenseModal.present();
    //this.toggleSection(toggle_index);
  }

}
