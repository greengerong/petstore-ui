import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RebirthHttp, GET, RebirthHttpProvider } from 'rebirth-http';
import { Observable } from 'rxjs/Observable';
import { Demo } from './demo.model';

@Injectable()
export class DemoService extends RebirthHttp {
  constructor(protected http: Http, protected rebirthHttpProvider: RebirthHttpProvider) {
    super();
  }

  @GET('demo')
  fetchDemo(): Observable<Demo> {
    return null;
  }
}
