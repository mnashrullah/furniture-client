import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { UserService } from '../user.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.page.html',
  styleUrls: ['./user-add.page.scss'],
})
export class UserAddPage implements OnInit {
  data = {
    useremail: '',
    userpassword: '',
    name: ''
  };
  constructor(
    public userService: UserService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }
  addUser() {
    console.log(this.data);
    this.userService.addUser(this.data).subscribe((response: Response) => {
      if (response) {
        this.userService.message('Data berhasil disimpan');
      } else {
        this.userService.message('Terjadi kesalahan');
      }
      this.modalController.dismiss();
    });
  }
}
