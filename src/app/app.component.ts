import {Component} from '@angular/core';
import {AsyncDataService} from './services/async-services/async-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SWAPIAngular';


  constructor() {
  }
}
