import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.less']
})
export class FirstComponent implements OnInit {

  date = new Date();
  year = new Date();
  month = new Date();
  week = new Date();
  dateTime = new Date();
  time = new Date();

  person = {
    name: 'zhang',
    age: 19
  };

  constructor() {
  }

  ngOnInit() {
    console.log(this.person);
  }

  log1($event: any) {
    console.log($event);
    console.log(this.weekNum($event), this.weekNum1($event));
    // 一周开始与结束
    this.weekStart($event);
    this.weekEnd($event);
  }

  // 今天星期几
  weekNum(date: Date): string {
    const day = date.getDay();
    switch (day) {
      case 0:
        return '星期日';
        break;
      case 1:
        return '星期一';
        break;
      case 2:
        return '星期二';
        break;
      case 3:
        return '星期三';
        break;
      case 4:
        return '星期四';
        break;
      case 5:
        return '星期五';
        break;
      case 6:
        return '星期六';
        break;
    }
  }

  // 今天星期几
  weekNum1(date: Date): string {
    const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return week[date.getDay()];
  }

  // 获取一周开始日期
  weekStart(date: Date): Date {
    date.setDate(date.getDate() - (date.getDay() + 6) % 7);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  // 获取一周结束日期
  weekEnd(date: Date): Date {
    date.setDate(date.getDate() + (date.getDay() + 6) % 7 + 6);
    date.setHours(59, 59, 59, 999);
    return date;
  }

}
