import { Component, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageServiceProvider } from '../../providers/storage-service/storage-service';
import { Budget } from '../../models/budget';
import * as _ from 'underscore';
import { Subscription } from 'rxjs';
/**
 * Generated class for the BudgetListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-budget-list',
  templateUrl: 'budget-list.html',
})
export class BudgetListPage implements OnDestroy {

  budget:Budget[]=[];
  subscription:Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams,private storageService:StorageServiceProvider) {
    this.subscription = this.storageService.budgetSourceAnnouncement.subscribe(
      () => {
        this.loadBudgetList();
    });
    this.loadBudgetList();
  }

  loadBudgetList() {
    this.storageService.getBudgetList().then( 
      (list) => {
        this.budget = list;
        this.budget = _.sortBy( this.budget, 'budgetKey').reverse();
      });
  }

  ionViewDidLoad() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onRemoveBudget(budgetKey:string) {
    this.storageService.deleteBudget('budget_'+budgetKey);
  }

}
