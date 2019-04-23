import { Component } from '@angular/core';
import { HubConnectionBuilder } from "@aspnet/signalr";
import { MessagePackHubProtocol } from "@aspnet/signalr-protocol-msgpack";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-signalr-protocol-msgpack-issue';

  ngOnInit() {
    var connection = new HubConnectionBuilder()
    .withUrl("")
    .withHubProtocol(new MessagePackHubProtocol())
    .build();
  }
}
