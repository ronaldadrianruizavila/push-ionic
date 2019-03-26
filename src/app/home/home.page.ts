import { Component } from '@angular/core';
import {PushnotificationService} from '../services/pushnotification.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private _pushNoti: PushnotificationService ) {
    this._pushNoti.init_Notification();
  }
}
