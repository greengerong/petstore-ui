import { Component, OnInit } from '@angular/core';
import { DemoService, Demo } from '../core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: Demo;

  constructor(private demoService: DemoService) {
  }

  ngOnInit() {
    this.demoService.fetchDemo()
      .subscribe(res => this.data = res);
  }

}
