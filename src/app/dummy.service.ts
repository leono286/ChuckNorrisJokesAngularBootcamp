import { Joke } from './joke.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/pairwise';

@Injectable()
export class DummyService {

  url = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) {
  }

  getContent(): Observable<any> {
    return Observable
      .timer(0, 6000)
      .switchMap(x => this.http.get<Joke>(this.url))
      .pluck('value')
      .pairwise();
  }
}
