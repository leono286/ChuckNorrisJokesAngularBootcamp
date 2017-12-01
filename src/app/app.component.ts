import { Observable } from 'rxjs/Observable';
import { DummyService } from './dummy.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  joke: Observable<any>;

  constructor(private service: DummyService) {
    this.joke = this.service.getContent();
  }



}
