import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { StorageServiceProvider } from '../../providers/storage-service/storage-service';
import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { CommonServiceProvider } from '../../providers/common-service/common-service';

/**
 * Generated class for the CashManagerSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cash-manager-settings',
  templateUrl: 'cash-manager-settings.html',
})
export class CashManagerSettingsPage implements OnInit {
  userName:string='';
  currency:string='';
  userData:User;

  constructor(public navCtrl: NavController, public navParams: NavParams,private commonService:CommonServiceProvider,
    public toastCtrl: ToastController,private storageService:StorageServiceProvider) {
  }

  async ngOnInit() {
    this.userData = await this.storageService.getUserDetails();
    if(!this.userData)
      return;
      
    this.userName = this.userData.username;
    this.currency = this.userData.currencyId;
  }

  ionViewDidLoad() {
  }

  onSettingsSave() {
    this.storageService.saveUserDetails(this.userName,this.currency).then(
      () => {
        this.commonService.presentToast('Settings saved successfully.');
        this.navCtrl.setRoot(HomePage);
      }
    );
  }

}
