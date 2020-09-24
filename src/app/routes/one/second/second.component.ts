import {Component, OnInit} from '@angular/core';
import {ClassTest} from '../../../core/model/class-test';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.less']
})

export class SecondComponent implements OnInit {

  heroes1 = ['11', '22', '33'];

  heroes2 = [
    new ClassTest('1', 'test1'),
    new ClassTest('2', 'test2'),
    new ClassTest('3', 'test3'),
    new ClassTest('4', 'test4')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
