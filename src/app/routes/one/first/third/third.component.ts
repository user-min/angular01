import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.less']
})
export class ThirdComponent implements OnInit {

  @Input() person = null;

  constructor() {
  }

  ngOnInit() {
  }

}
