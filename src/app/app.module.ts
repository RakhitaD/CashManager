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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SetExpensePage,
    SetIncomePage,
    BudgetCreatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SetExpensePage,
    SetIncomePage,
    BudgetCreatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
