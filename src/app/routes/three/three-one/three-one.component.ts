import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-three-one',
  templateUrl: './three-one.component.html',
  styleUrls: ['./three-one.component.less']
})
export class ThreeOneComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Divider分割线');
  }

}
