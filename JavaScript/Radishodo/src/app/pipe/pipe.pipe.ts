import { Pipe, PipeTransform } from '@angular/core';
import { Injectable } from '@angular/core';

@Pipe({
  name: 'pipe'
})

@Injectable({
  providedIn: 'root'
})

export class PipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }
  
  // 毫秒时间转换
  getMyDate(data){  
    let oDate = new Date(data);
    let oYear = oDate.getFullYear();
    let oMonth = oDate.getMonth()+1;
    let oDay = oDate.getDate();

    let oHour = oDate.getHours();
    let oMin = oDate.getMinutes();
    let oSen = oDate.getSeconds();

    let oTime_0 = oYear +'-'+ this.getzf(oMonth) +'-'+ this.getzf(oDay);  
    let oTime_1 = this.getzf(oHour) +':'+ this.getzf(oMin) +':'+this.getzf(oSen);
    return {Date:oTime_0,Time:oTime_1}
  };
// 补0操作
  getzf(num){
    if(parseInt(num) < 10){
        num = '0'+num;
    }
    return num;
  }

  /**
   * 时间选择器 获取时间   燕趣二期  zlq 修改
   *
   * @param {*} dateRange
   * @param {*} params
   * @memberof UtilService
   */

  public gettime(startAt, endAt, params): void { 
    if(startAt&&endAt){
      params.startAt = this.format_Date(startAt);
      params.endAt = this.format_Date(endAt);
      params.endAt += 86399999
    }
  }

  public format_Date(datetime) {   
    // 获取年月日 slice(-2)过滤掉大于10日期前面的0
    let year = new Date(datetime).getFullYear(),
      month = ("0" + (new Date(datetime).getMonth() + 1)).slice(-2),
      date = ("0" + new Date(datetime).getDate()).slice(-2);
    // 拼接
    let result = year + "/" + month + "/" + date;
    let data = new Date(result).getTime();
    // 返回
    //console.log(data)
    return data;
  }

  // public formatDate(datetime) {   
  //   // 获取年月日 slice(-2)过滤掉大于10日期前面的0
  //   let year = datetime.getFullYear(),
  //     month = ("0" + (datetime.getMonth() + 1)).slice(-2),
  //     date = ("0" + datetime.getDate()).slice(-2);
  //   // 拼接
  //   let result = year + "/" + month + "/" + date;
  //   let data = new Date(result).getTime();
  //   // 返回
  //   return data;
  // }





/*
 * id
 * img
 * title
 * type      0-首页banner 1-找职位banner  2-找精英banner 3-行业大图
 * createAt_0
 * createAt_1
 * updateAt_0
 * updateAt_1
 * author
 * status     1-草稿 2-上线 
*/
  //列表还原
  article_list(data){
    let articlelist = [];
    for( let a in data){
      let b = data[a];
      let type:number = b.type;
      let status:number = b.status;
      let status_but:string = null;
      let createAt = this.getMyDate(b.createAt)
      let updateAt = this.getMyDate(b.updateAt)
      switch(type){
        case 0: b.type = "首页banner";
        break;
        case 1: b.type = "找职位banner";
        break;
        case 2: b.type = "找精英banner";
        break;
        case 3: b.type = "行业大图";
        break;
        default:
          b.type ="未知类型";
      }
      switch(status){
        case 1: 
        b.status = "草稿";
        b.color = 'color-005'
        status_but = "上线";
        break;
        case 2: 
        b.status = "上线";
        b.color = 'color-ff0'
        status_but = "下线";
        break;
        default:
          b.status ="为定义状态";
      }
      let article:{
        id:string,
        img:string,
        title:string,
        type:string,
        createAt_0:string,
        createAt_1:string,
        updateAt_0:string,
        updateAt_1:string,
        author:string,
        status:string,
        sta_but:string,
        color:string
      } = {
        id: b.id,
        img: b.img,
        title: b.title,
        type: b.type,
        createAt_0: createAt.Date,
        createAt_1: createAt.Time,
        updateAt_0: updateAt.Date,
        updateAt_1: updateAt.Time,
        author: b.author,
        status: b.status,
        sta_but: status_but,
        color: b.color
      };
      articlelist.push(article);
    }

    return articlelist
  }

}
