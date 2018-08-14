import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { BudgetCreatePage } from '../budget-create/budget-create';
import { CategoryServiceProvider } from '../../providers/category-service/category-service';
import { AddIncomeComponent } from '../../components/add-income/add-income';
import { AddExpenseComponent } from '../../components/add-expense/add-expense';
import { EditIncomeComponent } from '../../components/edit-income/edit-income';
import { StorageServiceProvider } from '../../providers/storage-service/storage-service';
import { User } from '../../models/user';
import { Budget } from '../../models/budget';
import { CommonServiceProvider } from '../../providers/common-service/common-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit,OnDestroy{
  progressPercent:number;
  totalIncome :string;
  totalExpense:string;
  balance:string;
  ionCatList:any[];
  incomeCategories:any[];
  expenseCategories:any[];
  userData:User;
  budget:Budget;
  headerText:string = 'CASH MANAGER';
  budgetId:string;
  subscription:Subscription;
  showEmptyHome:boolean  = false;

  constructor(public navCtrl: NavController, private modCtrl:ModalController,private storageService:StorageServiceProvider,
    private categoriesService:CategoryServiceProvider,private commonService:CommonServiceProvider) {

      this.subscription = this.storageService.budgetSourceAnnouncement.subscribe((data) => {
        this.budgetId = data;

        if(this.budgetId) {
          this.storageService.getBudget(this.budgetId).then(
            (data) => {
              this.budget = data;
              this.initializeHome(this.budget);
            }
          );
        }
      });
  }

  async ngOnInit() {
    this.userData = await this.storageService.getUserDetails();
    let maxbudgetId = await this.storageService.getCurrentBudgetId();
    
    this.budget = await this.storageService.getBudget('budget_'+maxbudgetId);


    if(!this.budget){
     this.showEmptyHome = true;
      return;
    }
    else
      this.showEmptyHome = false;

    this.initializeHome(this.budget);
  }

  ionViewDidLoad() {
    
  }

  async initializeHome(budget:Budget) {

    let allIncome = this.storageService.getTotalIncome(this.budget);
    let allExpense = this.storageService.getTotalExpense(this.budget);
    let balance = allIncome - allExpense;
    this.progressPercent = (balance/ allIncome)*100;

    this.totalIncome = await this.commonService.transform_to_currency(allIncome);
    this.totalExpense =await this.commonService.transform_to_currency(allExpense);
    this.balance = await this.commonService.transform_to_currency(balance);

    this.incomeCategories = this.categoriesService.getIncomeCategories();
    this.expenseCategories = this.categoriesService.getExpenseCategories();

    if(budget.budgetName){
      this.headerText = budget.budgetName;
      this.showEmptyHome =false;
    }
    this.ionCatList = [{title:"Net Disposable Income",categories:this.incomeCategories,income:true},
    {title:"Total Expenditure",categories:this.expenseCategories,open:'open',income:false}];
  }

  onNewBudget() {
    this.navCtrl.push(BudgetCreatePage);
  }

  toggleSection(i) {
    this.ionCatList[i].open = !this.ionCatList[i].open;
  }

  onActionClick(transaction_type:string,category:string) {
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
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
