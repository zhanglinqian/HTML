import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../service/http/http.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UploadFile, UploadFilter } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-newedits',
  templateUrl: './newedits.component.html',
  styleUrls: ['./newedits.component.scss'],
})


export class NeweditsComponent implements OnInit {
  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public Http: HttpService,
    private msg: NzMessageService
  ) { }
  public pageTitle: string
  public id: string
  public title: string = ''
  public type: any = ''
  public industry: any = ''
  public content: string = ''
  public url: string = ''
  public fileList = [];
  public res: any = {
    title: '',
    type: '',
    industry: '',
    content: '',
    url: '',
    status: '',
    img: ''
  }
  public img: string

  ngOnInit() {
    this.routeParameters()
  }

  public routeParameters() {
    this.activeRoute.queryParams.subscribe((res) => {
      console.log(res)
      this.id = res.id
      if (res.id === '') {
        this.id = res.id
        this.pageTitle = '新增'
      } else {
        this.id = res.id
        this.pageTitle = '编辑'
        this.getdata()
      }
    })
  }

  public getdata() {
    this.Http.singleArticle(this.id).subscribe((res: any) => {
      if (res.code === 0) {
        this.title = res.data.article.title || ''
        this.type = String(res.data.article.type) || ''
        this.industry = String(res.data.article.industry) || ''
        this.content = res.data.article.content || ''
        this.url = res.data.article.url || ''
        this.img = res.data.article.img || ''
        this.res = res.data.article
      }
    })
  }

  public submitData(status) {
    if (!this.title) {
      this.msg.error('请填写标题')
      return
    }
    if (!this.type) {
      this.msg.error('请选择类型')
      return
    }
    if (!this.img) {
      console.log(this.img)
      this.msg.error('请上传图片')
      return
    }
    this.res.title = this.title
    this.res.type = this.type,
      this.res.industry = this.industry,
      this.res.content = this.content,
      this.res.url = this.url,
      this.res.status = status,
      this.res.img = this.img
    if (this.id === '') {
      this.Http.newArticle(this.res).subscribe((res: any) => {
        if (res.code === 0) {
          this.router.navigate(['main/list'])
        } else {
          this.msg.error(res.message)
        }

      })
    } else {
      this.Http.editArticle(this.id, this.res).subscribe((res: any) => {
        if (res.code === 0) {
          this.router.navigate(['main/list'])
          console.log(this.content)
        } else {
          this.msg.error(res.message)
        }
      })
    }
  }





  public delimg(){
    this.img = ''
    this.fileList = [];
  }







  // 取消
  public cancel() {
    this.router.navigate(['main/list'])
  }

  handleChange(info: any): void {
    switch (info.type) {
      case 'start':
        info.fileList = [];
        break;
      case 'progress':

        break;
      case 'success':
        // this.fileList = [];
        // this.fileList[0] = {
        // url: info.file.response.data.url,
        // name: info.file.name,
        // uid: info.file.uid,
        // status: info.file.status
        // }
        this.img = info.file.response.data.url
        this.fileList = [];
        break;
      case 'error':
        break;
      case 'removed':
        // info.file = {}
        // this.fileList = [];
        this.img = ''
        break;
    }
  }

  filters: UploadFilter[] = [
    {
      name: 'type',
      fn: (fileList: UploadFile[]) => {
        const filterFiles = fileList.filter(w => ~['image/png'].indexOf(w.type));
        if (filterFiles.length !== fileList.length) {
          this.msg.error(`包含文件格式不正确，只支持 png 格式`);
          return filterFiles;
        }
        return fileList;
      }
    },
    {
      name: 'async',
      fn: (fileList: UploadFile[]) => {
        return new Observable((observer: Observer<UploadFile[]>) => {
          // doing
          observer.next(fileList);
          observer.complete();
        });
      }
    }
  ];


}




// author: "admin"
// content: "行业大图444"
// id: 14166
// img: "http://carrots.ks3-cn-beijing.ksyun.com/task/f6bb38b9-4ccc-4e16-8713-8b0773e42a01.png"
// industry: 0
// source: ""
// status: 1
// summary: ""
// title: "响应式Web 设计—px-em"
// type: 3
// url: "fdsadasfdasfadsffsda"