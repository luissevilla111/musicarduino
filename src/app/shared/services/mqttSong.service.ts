import { Injectable } from '@angular/core';
import { IMqttMessage,MqttService } from 'ngx-mqtt';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MqttSongService {

  private subscription: Subscription;
  public message: string;
  endpoint:string = "testtopic/holash";

  constructor(
    private _mqttService: MqttService
  ) {}

   subscribeTopic(topic?: string){
    this.unSubscribeTopic();
    this._mqttService.observe(this.endpoint).subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
    });;
  }
  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message);
    console.log(message)
    console.log("message send")
  }
  unSubscribeTopic(){
    this.subscription.unsubscribe();
  }

  public ngOnDestroy() {
    this.unSubscribeTopic()
  }
}
