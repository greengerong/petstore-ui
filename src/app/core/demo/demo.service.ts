import { Injectable } from '@angular/core';
import { RebirthHttp, GET, RebirthHttpProvider } from 'rebirth-http';
import { Observable } from 'rxjs/Observable';
import { Demo } from './demo.model';
import { Http } from '@angular/http';

@Injectable()
export class DemoService extends RebirthHttp {
  constructor(protected http: Http, protected rebirthHttpProvider: RebirthHttpProvider) {
    super({ http, rebirthHttpProvider });
  }

  @GET('demo')
  getDemo(): Observable<Demo> {
    return null;
  }
}
