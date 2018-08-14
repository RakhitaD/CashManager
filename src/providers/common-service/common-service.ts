import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { DatePicker } from '../../../node_modules/@ionic-native/date-picker';
import { CurrencyPipe,DecimalPipe } from "@angular/common";
import { User } from '../../models/user';
import { StorageServiceProvider } from '../storage-service/storage-service';

/*
  Generated class for the CommonServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonServiceProvider {
  userData:User;
  constructor(public http: HttpClient,public toastCtrl:ToastController,private cp: CurrencyPipe,
    private storageService:StorageServiceProvider,
    private dp:DecimalPipe,private datePicker:DatePicker) {
    console.log('Hello CommonServiceProvider Provider');
  }

  presentToast(toastText:string) {
    const toast = this.toastCtrl.create({
      message: toastText,
      duration: 3000
    });
    toast.present();
  }

  showDatePicker() {
    return this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date => {
          return date;
      },
      err => {
        console.log('Error occurred while getting date: ', err)
        return err;
      }
    );
  }
  

  transform_to_decimal(amount:string) {
    return this.dp.transform(amount);
  }

  transform_to_currency(amount:any) {
    return this.storageService.getUserDetails().then(
      (result) => {
        this.userData =  result;
        return this.cp.transform(amount,this.userData.currencyId,"symbol");
      }
    );
  }

  transform_currency_to_decimal(amount:string) {
    let transformed_amount = (this.transform_to_decimal(amount.replace(",","")
      .replace(this.userData.currencyId,'')).replace(",",""));
    return transformed_amount;
  }
}
