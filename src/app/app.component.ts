import { Component, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('staticTabs', { static: false }) 
  public staticTabs?: TabsetComponent;
  
}
