import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetExpensePage } from './set-expense';

@NgModule({
  declarations: [
    SetExpensePage,
  ],
  imports: [
    IonicPageModule.forChild(SetExpensePage),
  ],
})
export class SetExpensePageModule {}
