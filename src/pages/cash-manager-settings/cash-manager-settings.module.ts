import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CashManagerSettingsPage } from './cash-manager-settings';

@NgModule({
  declarations: [
    CashManagerSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(CashManagerSettingsPage),
  ],
})
export class CashManagerSettingsPageModule {}
