import { Injectable } from '@angular/core';

/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryServiceProvider {

  incomeCategories:any[];
  expenseCategories:any[];
  constructor() {
    this.incomeCategories = ['Salary','Bonus'];
    this.expenseCategories = ['Rent','Electricity','Bills','Transport','Financial Obligations'];
  }

  getIncomeCategories() {
    return this.incomeCategories;
  }

  getExpenseCategories() {
    return this.expenseCategories;
  }

}
