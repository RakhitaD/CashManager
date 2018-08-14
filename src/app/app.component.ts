import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BudgetCreatePage } from '../pages/budget-create/budget-create';
import { ReportsPage } from '../pages/reports/reports';
import { CashManagerSettingsPage } from '../pages/cash-manager-settings/cash-manager-settings';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { BudgetListPage } from '../pages/budget-list/budget-list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, private admobFree: AdMobFree,
    public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'My Budgets', component: BudgetListPage },
      { title: 'Settings', component: CashManagerSettingsPage },
      { title: 'Reports', component: ReportsPage },
    ];
    
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      isTesting: true,
      autoShow: true
     };
     this.admobFree.banner.config(bannerConfig);

     this.admobFree.banner.prepare()
     .then(() => {
       this.admobFree.banner.show();
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
     })
  .catch(e => console.log(e));

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  onNewBudget() {
    this.nav.push(BudgetCreatePage);
  }

  onShowReport() {
    this.nav.push(ReportsPage);
  }
  
}
