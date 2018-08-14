import { Component } from '@angular/core';
import { NavParams, ViewController, ActionSheetController } from "ionic-angular";
import { Camera,CameraOptions, PictureSourceType } from '../../../node_modules/@ionic-native/camera';
/**
 * Generated class for the AddExpenseComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-expense',
  templateUrl: 'add-expense.html'
})
export class AddExpenseComponent {

  category: string;
  imgSrc:any;
  
  constructor(private params:NavParams,public viewCtrl:ViewController,
    private _camera:Camera,private actionSheetCtrl:ActionSheetController) {
    this.category = this.params.get('category');
    console.log(this.category);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  captureReceipt(sourceType:PictureSourceType) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this._camera.DestinationType.DATA_URL && this._camera.DestinationType.FILE_URI,
      encodingType: this._camera.EncodingType.JPEG,
      mediaType: this._camera.MediaType.PICTURE,
      sourceType:sourceType,
      saveToPhotoAlbum:true,
      correctOrientation:true
    }

    this._camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imgSrc = base64Image;
     }, (err) => {
      console.log("Error Encountered :"+err);
     });
  }

  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.captureReceipt(this._camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.captureReceipt(this._camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

}
