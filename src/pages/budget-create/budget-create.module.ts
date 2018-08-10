import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BudgetCreatePage } from './budget-create';

@NgModule({
  declarations: [
    BudgetCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(BudgetCreatePage),
  ],
})
export class BudgetCreatePageModule {}
