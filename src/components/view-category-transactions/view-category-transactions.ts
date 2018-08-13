import { Component } from '@angular/core';

/**
 * Generated class for the ViewCategoryTransactionsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'view-category-transactions',
  templateUrl: 'view-category-transactions.html'
})
export class ViewCategoryTransactionsComponent {

  text: string;

  constructor() {
    console.log('Hello ViewCategoryTransactionsComponent Component');
    this.text = 'Hello World';
  }

}
