import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SetExpensePage } from '../pages/set-expense/set-expense';
import { SetIncomePage } from '../pages/set-income/set-income';
import { BudgetCreatePage } from '../pages/budget-create/budget-create';
import { DatePicker } from "@ionic-native/date-picker";
import { FormsModule } from '../../node_modules/@angular/forms';
import { DateServiceProvider } from '../providers/date-service/date-service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { IncomeCategoryComponent } from '../components/income-category/income-category';
import { ProgressBarModule } from "angular-progress-bar";
import { ReportsPage } from '../pages/reports/reports';
import { HeaderColor } from '@ionic-native/header-color';
import { CategoryServiceProvider } from '../providers/category-service/category-service';
import { AddIncomeComponent } from '../components/add-income/add-income';
import { AddExpenseComponent } from '../components/add-expense/add-expense';
import { EditIncomeComponent } from '../components/edit-income/edit-income';
import { CashManagerSettingsPage } from '../pages/cash-manager-settings/cash-manager-settings';
import { AdMobFree } from '../../node_modules/@ionic-native/admob-free';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SetExpensePage,
    SetIncomePage,
    BudgetCreatePage,
    IncomeCategoryComponent,
    ReportsPage,
    AddIncomeComponent,
    AddExpenseComponent,
    EditIncomeComponent,
    CashManagerSettingsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ProgressBarModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SetExpensePage,
    SetIncomePage,
    BudgetCreatePage,
    IncomeCategoryComponent,
    ReportsPage,
    AddIncomeComponent,
    AddExpenseComponent,
    EditIncomeComponent,
    CashManagerSettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DateServiceProvider,
    HeaderColor,
    AdMobFree,
    CategoryServiceProvider,
    Storage
    
  ]
})
export class AppModule {}
