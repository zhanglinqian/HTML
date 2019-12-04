import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isArray, isObject } from 'util';
import { AddressService } from '../address/address.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private Address: AddressService,
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  mapObjectToParams(obj: any): HttpParams {
    let httpobj = new HttpParams();
    for (const key in obj) {
      if (isArray(obj[key] || isObject(obj[key]))) {
        httpobj = httpobj.append(key, JSON.stringify(obj[key]));
      } else {
        httpobj = httpobj.append(key, obj[key]);
      }
    }
    //console.log(httpobj);
    return httpobj;
  }



  // 登录
  loginIn(obj) {
    return this.http.post(this.Address.loginIn(), this.mapObjectToParams(obj), this.httpOptions);
  }
  // 获取列表
  articleList(Paging) {
    return this.http.get(this.Address.screeningArticle(), { params: Paging });
  }
  // 获取列表
  singleArticle(id) {
    return this.http.get(this.Address.singleArticle(id));
  }
  // 改变上、下线状态
  status(status) {
    return this.http.put(this.Address.statusArticle(status), this.httpOptions);
  }
  // 删除
  delete(id) {
    return this.http.delete(this.Address.deleteArticle(id), this.httpOptions);
  }
  // 新增
  newArticle(obj) {
    return this.http.post(this.Address.newArticle(), this.mapObjectToParams(obj), this.httpOptions);
  }
  // 上传图片
  uploadImage(img) {
    return this.http.post(this.Address.uploadImage(), img, this.httpOptions);
  }
  // 编辑
  editArticle(id,obj){
    return this.http.put(this.Address.deleteArticle(id),this.mapObjectToParams(obj), this.httpOptions )
  }
  // logout() {
  //   return this.http.post(this.Address.signOut())
  // }


}
