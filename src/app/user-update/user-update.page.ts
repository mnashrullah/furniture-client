import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { UserService } from '../user.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.page.html',
  styleUrls: ['./user-update.page.scss'],
})
export class UserUpdatePage implements OnInit {
  user: any;
  data = {
    userid: '',
    useremail: '',
    userpassword: '',
    name: ''
  };
  constructor(
    public navParams: NavParams,
    public userService: UserService,
    public modalController: ModalController
  ) {
    this.user = this.navParams.data.value;
    console.log(this.user);
    this.data.userid = this.user.userid;
    this.data.useremail = this.user.useremail;
    this.data.userpassword = this.user.userpassword;
    this.data.name = this.user.name;
  }

  ngOnInit() {

  }
  updateUser() {
    console.log(this.data);
    this.userService.updateUser(this.data).subscribe((response: Response) => {
      if (response) {
        this.userService.message('Data berhasil diubah');
      } else {
        this.userService.message('Terjadi kesalahan');
      }
      this.modalController.dismiss();
    });
  }

}
