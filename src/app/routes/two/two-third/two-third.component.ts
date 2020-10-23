import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-third',
  templateUrl: './two-third.component.html',
  styleUrls: ['./two-third.component.less']
})
export class TwoThirdComponent implements OnInit {

  columnOldStr: Array<string> = [];
  // 表格列参数
  columnParams = {
    columnShow: true,
    Indeterminate: false,
    data: [
      {
        label: '人员编号',
        value: 'userNumber',
        status: true, // 是否显示
        width: 120,
        showSort: false,
        showFilter: false,
        fixedLeft: false,
        fixedRight: false,
        order: 0,
        distance: null // 固定列的距离
      },
      {
        label: '图片',
        value: 'faceImageBase64',
        status: true,
        width: 120,
        showSort: false,
        showFilter: false,
        fixedLeft: false,
        fixedRight: false,
        order: 1,
        distance: null // 固定列的距离
      },
      {
        label: '姓名',
        value: 'name',
        status: true,
        width: 120,
        showSort: false,
        showFilter: false,
        fixedLeft: false,
        fixedRight: false,
        order: 2,
        distance: null // 固定列的距离
      },
      {
        label: '性别',
        value: 'sex',
        status: true,
        width: 120,
        showSort: false,
        showFilter: false,
        fixedLeft: false,
        fixedRight: false,
        order: 2,
        distance: null // 固定列的距离
      },
      {
        label: '年龄',
        value: 'age',
        status: true,
        width: 120,
        showSort: false,
        showFilter: false,
        fixedLeft: false,
        fixedRight: false,
        order: 2,
        distance: null // 固定列的距离
      },
      {
        label: '身份证号',
        value: 'idcard',
        status: true,
        width: 120,
        showSort: false,
        showFilter: false,
        fixedLeft: false,
        fixedRight: false,
        order: 2,
        distance: null // 固定列的距离
      },
      {
        label: '手机号',
        value: 'mobile',
        status: true,
        width: 120,
        showSort: false,
        showFilter: false,
        fixedLeft: false,
        fixedRight: false,
        order: 2,
        distance: null // 固定列的距离
      },
    ],
    hasFixedLeft: false,
    hasFixedRight: false
  };

  constructor() { }

  ngOnInit() {
  }

  // 列展示
  checkedColumn($event) {
    this.columnParams.data.forEach((item) => {
      item.status = $event;
    });
    this.refreshColumnShow();
  }

  // 刷新列展示状态
  refreshColumnShow() {
    // every() 方法用于检测数组所有元素是否都符合指定条件
    // every() 方法使用指定函数检测数组中的所有元素：
    // 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
    // 如果所有元素都满足条件，则返回 true。
    this.columnParams.columnShow = this.columnParams.data.every((item) => {
      return item.status;
    });

    // some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
    // some() 方法会依次执行数组的每个元素：
    // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
    // 如果没有满足条件的元素，则返回false。
    this.columnParams.Indeterminate = this.columnParams.data.some((item) => {
      return item.status && !this.columnParams.columnShow;
    });
    this.columnParams.hasFixedLeft = this.columnParams.data.some((value) => {
      return value.fixedLeft;
    });
    this.columnParams.hasFixedRight = this.columnParams.data.some((value) => {
      return value.fixedRight;
    });
    // this.columnOldStr = JSON.stringify(this.columnParams.data);
  }

}
