import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-two-first',
  templateUrl: './two-first.component.html',
  styleUrls: ['./two-first.component.less']
})
export class TwoFirstComponent implements OnInit {

  constructor(private titleService: Title,
              private messageService: NzMessageService,) { }

  ngOnInit() {
    this.titleService.setTitle('设置标题');
    this.messageService.create('info', '创建提示信息');
  }

}
