import { NgModule } from '@angular/core';
import { IncomeCategoryComponent } from './income-category/income-category';
import { ExpenseCategoryComponent } from './expense-category/expense-category';
import { AddIncomeComponent } from './add-income/add-income';
import { AddExpenseComponent } from './add-expense/add-expense';
import { EditIncomeComponent } from './edit-income/edit-income';
import { ViewCategoryTransactionsComponent } from './view-category-transactions/view-category-transactions';
@NgModule({
	declarations: [IncomeCategoryComponent,
    ExpenseCategoryComponent,
    AddIncomeComponent,
    AddExpenseComponent,
    EditIncomeComponent,
    ViewCategoryTransactionsComponent],
	imports: [],
	exports: [IncomeCategoryComponent,
    ExpenseCategoryComponent,
    AddIncomeComponent,
    AddExpenseComponent,
    EditIncomeComponent,
    ViewCategoryTransactionsComponent]
})
export class ComponentsModule {}
