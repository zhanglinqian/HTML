import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Data } from '@angular/router';
import { Observable, throwError, from } from 'rxjs';
import { HttpService } from '../../../service/http/http.service';
import { PipePipe } from '../../../pipe/pipe.pipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

// 请求参数
// startAt	起始更新时间		
// endAt	  终止更新时间	  	
// type	    类型	       0-首页banner 1-找职位banner  2-找精英banner 3-行业大图
// status	  状态	       1-草稿 2-上线 
// 字段 第几页 page 不写时默认为1
// 字段 展示数量 size 不写时默认为10。

  // private request: {
  //   startAt:Date,
  //   endAt:Date,
  //   type:number,
  //   status:number,
  //   page:number
  // } = {
  //   startAt:null,
  //   endAt:null,
  //   type:null,
  //   status:null,
  //   page:null
  // }

  private request = {
    //startAt:'',
    //endAt:'',
    type:'',
    status:'',
    page: ''
  }
  private startAt:Date;
  private endAt:Date;


  private articlelist = [];
  private page: number[] = [1] || [];
  private total;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private  Http: HttpService,
    private datePipe: PipePipe
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((res) => { 
      console.log(res)
      this.request.page = res.page || 1;
      //this.request.startAt = res.startAt || '';
      //this.request.endAt = res.endAT || '';
      this.request.status = res.status || '';
      this.request.type = res.type || '';
    });
    this.getList();
  }



  transFormaTion() {
    const status = JSON.parse(JSON.stringify(this.request));
    status.startAt = new Date(status.startAt);
    status.endAt = new Date(status.endAt);
    status.startAt = status.startAt.getTime() || '';
    status.endAt = status.endAt.getTime() || '';
    return status
  }

  getList(){
    const data = this.transFormaTion();
    console.log('data',data);
    this.Http.articleList(data).subscribe(( res: any) => {
      if ( res.code === 0 ) {
        console.log(res);
        const data = res.data.articleList;
        this.articlelist = [];
        this.page = [];
        this.articlelist = this.datePipe.article_list(data);
        window.sessionStorage.setItem('articleList', JSON.stringify(this.articlelist));
        const page01 =  Math.ceil((res.data.total) / 10 );
        this.total = page01;
        for (let i = 0; i < page01; i++) { this.page.push( i + 1 ); }
      } else {
        this.articlelist[0] = { id: 0, title: 0, type: 0, createAt: 0, updateAt: 0, author: 0, status: 0, };
      }
      console.log(this.page);
      console.log(res.data);
      console.log(this.articlelist);
    });
  }
// 编辑
  edit() {
    this.router.navigate(['main/articleNew'],{ queryParams: { page: 1,name:222 } });
  }
// 上、下线
  status(id, status) {
    let sta = null;
    switch (status) {
      case '草稿' : sta = 2;
                  break;
      case '上线' : sta = 1;
                  break;
    }
    const idStatus: string = 'id=' + id + '&' + 'status=' + sta;
    this.Http.status(idStatus).subscribe(( res: any) => {
      console.log(idStatus);
      console.log(res.code);
    });
  }
// 添加
addarticle() {
  this.router.navigate(['main/articleNew']);
}
// 删除
  delete(id) {
    this.Http.delete(id).subscribe((res: any) => {
      console.log(res.code);
    });
  }



// 清楚
clear() {
  console.log('清除');
  //this.request.startAt = null;
  //this.request.endAt = null;
  this.request.type = null;
  this.request.status = null;
  this.router.navigate(['main/list'],{ queryParams: this.request }).then(() => {
    window.location.reload();
  });
}
// 搜索
search() {
  console.log('搜索');
  this.transFormaTion();
  console.log(this.transFormaTion());
  this.router.navigate(['main/list'],{ queryParams: this.request }).then(() => {
    window.location.reload();
  });
}



// 分页
  paging(page) {
    console.log('分页');
    if (page === 0){
      this.request.page = this.total;
    } else {
      this.request.page = page;
    }
    this.transFormaTion();
    this.router.navigate(['main/list'],{ queryParams: this.request }).then(() => {
      window.location.reload();
    });
}




}

