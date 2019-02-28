import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { UserService } from '../user.service';
import { ModalController } from '@ionic/angular';
import { UserUpdatePage } from '../user-update/user-update.page';
import { UserAddPage } from '../user-add/user-add.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  userList: any;
  constructor(
    public userService: UserService,
    public modalController: ModalController) {
    this.loadUser();
  }
  loadUser() {
    this.userService.loadUser().subscribe((response: Response) => {
      this.userList = response.json();
      console.log(this.userList);
    });
  }
  async goDetailUser(user) {
    const modal = await this.modalController.create({
      component: UserUpdatePage,
      componentProps: { value: user }
    });
    modal.onDidDismiss().then(() => { this.loadUser() });
    return await modal.present();
  }
  async goAddUser() {
    const modal = await this.modalController.create({
      component: UserAddPage
    });
    modal.onDidDismiss().then(() => { this.loadUser() });
    return await modal.present();
  }
  deleteUser(userId) {
    this.userService.deleteUser(userId).subscribe((response: Response) => {
      if (response.ok) {
        this.userService.message('data berhasil dihapus');
      }
      this.loadUser();
    });
  }
}