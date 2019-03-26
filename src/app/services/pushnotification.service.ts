import {Injectable} from '@angular/core';
import {OneSignal} from '@ionic-native/onesignal/ngx';

@Injectable({
    providedIn: 'root'
})
export class PushnotificationService {

    constructor(private oneSignal: OneSignal) {
    }

    init_Notification() {
        this.oneSignal.startInit('', '');

        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

        this.oneSignal.handleNotificationReceived().subscribe(() => {
            // do something when notification is received
        });

        this.oneSignal.handleNotificationOpened().subscribe(() => {
            // do something when a notification is opened
        });

        this.oneSignal.endInit();
    }

}
