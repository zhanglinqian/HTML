import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }

  //  登录
  loginIn() {
    return '/a/login';
  }
  // 退出登录
  signOut() {
    return '/a/logout';
  }

  /***编辑**/

  // 新增Article
  newArticle() {
    return '/a/u/article';
  }
  // 编辑Article
  editArticle(id: string) {
    return `/a/u/article/${id}`;
  }
  // 上传图片
  uploadImage() {
    return '/a/u/img/task';
  }
  // 删除Article
  deleteArticle(id: string) {
    return `/a/u/article/${id}`;
  }
  // 上 / 下架Articl
  statusArticle(status: string) {
    return `/a/u/article/status?${status}`;
  }
  // 按条件获得article列表
  screeningArticle() {
    return '/a/article/search';
  }
  // 获取单个Article
  singleArticle(id: string) {
    return `/a/article/${id}`;
  }





}
