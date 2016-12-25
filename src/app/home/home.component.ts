import { Component, OnInit } from '@angular/core';
// import { DemoService, Demo } from '../core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // data: Demo;

  constructor() {
  }

  ngOnInit() {
    // this.demoService.getDemo()
    //   .subscribe(res => this.data = res);
  }

}
