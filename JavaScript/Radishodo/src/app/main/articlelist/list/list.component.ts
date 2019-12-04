import { Component, OnInit ,ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, ParamMap, Data } from '@angular/router';

import { HttpService } from '../../../service/http/http.service';
import { PipePipe } from '../../../pipe/pipe.pipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  //@ViewChild('input') input: ElementRef         
  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public Http: HttpService,
    public datePipe: PipePipe
  ) { }

  public navigationSubscription
  public startAt: any;
  public endAt: any;
  public type: any;
  public status: any;
  public pageIndex: any;
  public routerParams: any
  public expression = false
  public articlelist:any = []
  public page = [];
  public total;
  public data: any

  public ngOnInit() {
    this.routeParameters()
    this.getList();
    this.navigationSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.routeParameters()
        this.getList();
      }
    });
  }

  // 取消 订阅
  public ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  //([new Date(+res.startTime || '').toString(), new Date(+res.endTime || '').toString()])
  // 获取路由参数
  public routeParameters() {
    this.activeRoute.queryParams.subscribe((res) => {
        this.startAt = res.startAt === undefined ? null : new Date(+res.startAt);
        this.endAt =  res.endAt === undefined ? null : new Date(+res.endAt);
        this.type = res.type || '';
        this.status =  res.status || '';
        this.pageIndex = res.page || 1;
        this.total = res.total || 10;
    })
  }

  // 删除多余 路由参数
  public processingData() {
    let params = {
      startAt:  '',
      endAt:  '',
      type: this.type || '',
      status: this.status || '',
      page: this.pageIndex || 1
    }
    let i = this.datePipe.gettime(this.startAt,this.endAt, params)
    for (const key in params) {
      if (params[key] === '') {
        delete params[key]
      }
      if (params[key] === NaN) {
        delete params[key]
      }
    }
    this.data = params
  }

  public getList() {
    this.processingData()
    this.Http.articleList(this.data).subscribe((res: any) => {
      if (res.code === 0) {
        this.page = [];
        const data = res.data.articleList;
        this.articlelist = this.datePipe.article_list(data);
        const page01 = Math.ceil((res.data.total) / 10);
        this.total = page01;
        for (let i = 0; i < page01; i++) { 
          let c = i+1
          let b = {
            page: i+1,
            color: +this.pageIndex === c?'bgc-fff color-337':''
          }
          this.page.push(b); 
        }
        this.expression = true
      }
    });
  }

  // 编辑
  public edit(id) {
    this.router.navigate(['main/edit'], { queryParams: {id:id} });
  }

  // 上、下线
  public state(id, status) {
    let sta = null;
    switch (status) {
      case '草稿': sta = 2;
        break;
      case '上线': sta = 1;
        break;
    }
    const idStatus: string = 'id=' + id + '&' + 'status=' + sta;
    this.Http.status(idStatus).subscribe((res: any) => {
    });
    this.router.navigate(['main/list'])
  }

  // 删除
  public delete(id) {
    this.Http.delete(id).subscribe((res: any) => {
    });
    this.router.navigate(['main/list'],{ queryParams: this.data })
  }

  // 清楚
  public clear() {
    this.router.navigate(['main/list'])
  }

  // 搜索
  public search() {
    this.processingData()
    this.router.navigate(['main/list'], { queryParams: this.data })
  }

  // 分页
  public paging(page) {
    if (page === 0) {
      this.pageIndex = this.total;
    } else {
      this.pageIndex = page;
    }
    this.processingData()
    this.router.navigate(['main/list'], { queryParams: this.data })
  }








}





