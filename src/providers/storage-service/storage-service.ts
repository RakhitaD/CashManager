import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../../models/user';
import { Budget } from '../../models/budget';
import { Income } from '../../models/income';
import { Expense } from '../../models/expense';
import { Subject }    from 'rxjs';

/*
  Generated class for the StorageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageServiceProvider {
  budget:Budget;
  income:Income[]=[];
  expense:Expense[]=[];
  public userData:User;
  public budgetSourceAnnouncement = new Subject<string>();

  constructor(private storage:Storage) {
  }


  getUserDetails() {
    return this.storage.get('userdata').then((val) => {
      return val;
    });
  }

  saveUserDetails(username:string,currencyCode:string) {
    let userData = new User(username,currencyCode);
    return this.storage.set('userdata',userData);
  }

  async saveNewBudget(budgetName:string,budgetStartDate:Date,budgetEndDate:Date) {
    let budgetId = await this.createBudgetId();
    this.budget = new Budget(budgetId,budgetName,budgetStartDate,budgetEndDate);
    return this.storage.set('budget_temp',this.budget);
  }

  getBudget(budgetKey:string){
    return this.storage.get(budgetKey).then(
      (result) => {
        return result;
      } 
    )
  }

  async getCurrentBudgetId() {
    let maxBudgetId = 0;

    return this.storage.forEach(storageItem => {
      let item = storageItem as Budget;
      if(item.budgetKey) {
        maxBudgetId = item.budgetKey > maxBudgetId ? item.budgetKey : maxBudgetId;
      }
    }).then(
      () => {
        return maxBudgetId;
      }
    );
  }

  getBudgetList() {
    let items:Budget[]=[];
    return this.storage.forEach(storageItem => {
      let item = storageItem as Budget;
      if(item.budgetKey) {
        items.push(item);
      }
    }).then(
      () => {
        return items;
      }
    );
  }

  createBudgetId() {
    return this.storage.length().then(
      (count) => {
        return count + 1;
      }
    );
  }

  deleteBudget(budgetName:string) {
    this.storage.remove(budgetName);
    this.budgetSourceAnnouncement.next('budget_delete');
  }

  deleteTempBudget() {
    return this.storage.remove('budget_temp').then(
      (data) => {
        return data;
      }
    );
  }

  clearStorage() {
    this.storage.clear();
  }

  async addIncomeToBudget(categories:any[],category_income:any[]) {
    for(let i=0;i<categories.length;i++) {
      let income = new Income(categories[i],category_income[i]);
      if(income.income_amount)
        this.income.push(income);
    }
    this.budget =  await this.getBudget('budget_temp');
    this.budget.income = this.income;
    this.storage.set('budget_temp',this.budget);
  }

  async addExpenseToBudget(categories:any[],category_expense:any[]) {
    for(let i=0;i<categories.length;i++) {
      let expense = new Expense(categories[i],category_expense[i]);
      if(expense.expense_amount)
        this.expense.push(expense);
    }

    this.budget =  await this.getBudget('budget_temp');
    this.budget.expense = this.expense;
    this.storage.set('budget_'+this.budget.budgetKey,this.budget).then(
      () => {
        this.budgetSourceAnnouncement.next('budget_'+this.budget.budgetKey);
      }
    );
    this.storage.remove('budget_temp');
  }

  getTotalIncome(budget:Budget){
    let totalIncome:number=0;
    budget.income.forEach(income => {
      totalIncome = totalIncome + parseFloat(income.income_amount.toLocaleString());
    });
    return totalIncome;
  }

  getTotalExpense(budget:Budget){
    let totalExpense:number=0;
    budget.expense.forEach(expense => {
      totalExpense = totalExpense + parseFloat(expense.expense_amount.toLocaleString());
    });
    return totalExpense;
  }

}
