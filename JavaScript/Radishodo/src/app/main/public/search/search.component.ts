import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {




// 请求参数
// startAt	起始更新时间		
// endAt	  终止更新时间	  	
// type	    类型	       0-首页banner 1-找职位banner  2-找精英banner 3-行业大图
// status	  状态	       1-草稿 2-上线 

  private request: {
    startAt:Date,
    endAt:Date,
    type:number,
    status:number
  } = {
    startAt:null,
    endAt:null,
    type:null,
    status:null
  }

  constructor() { }

  ngOnInit() {
  }

  clear() {
    console.log('清除');
    this.request.startAt = null;
    this.request.endAt = null;
    this.request.type = null;
    this.request.status = null;
  }

  search() {
    console.log('搜索');
    console.log(this.request);
    console.log(this.request.startAt.getTime());
    console.log(this.request.endAt.getTime());
  }
}

