import { NgModule } from '@angular/core';
import { IncomeCategoryComponent } from './income-category/income-category';
import { ExpenseCategoryComponent } from './expense-category/expense-category';
import { AddIncomeComponent } from './add-income/add-income';
import { AddExpenseComponent } from './add-expense/add-expense';
@NgModule({
	declarations: [IncomeCategoryComponent,
    ExpenseCategoryComponent,
    AddIncomeComponent,
    AddExpenseComponent],
	imports: [],
	exports: [IncomeCategoryComponent,
    ExpenseCategoryComponent,
    AddIncomeComponent,
    AddExpenseComponent]
})
export class ComponentsModule {}
