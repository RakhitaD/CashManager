import { NgModule } from '@angular/core';
import { IncomeCategoryComponent } from './income-category/income-category';
import { ExpenseCategoryComponent } from './expense-category/expense-category';
@NgModule({
	declarations: [IncomeCategoryComponent,
    ExpenseCategoryComponent],
	imports: [],
	exports: [IncomeCategoryComponent,
    ExpenseCategoryComponent]
})
export class ComponentsModule {}
