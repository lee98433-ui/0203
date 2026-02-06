import { Component } from '@angular/core';
import { HttpClientService } from '../../@service/httpclient.service';

@Component({
  selector: 'app-api-demo2',
  imports: [],
  templateUrl: './api-demo2.component.html',
  styleUrl: './api-demo2.component.scss'
})
export class ApiDemo2Component {
  constructor(private htp:HttpClientService){}

ngOnInit(): void {
  this.htp.getApi('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10').subscribe((res)=>{
    console.log('api回來了')
  })
  console.log('程式繼續跑')

  //在呼叫post之前先把要傳遞的資料打包
  let postData={
    userName:'Allen',
    userAge:18
  }

  //呼叫post的方法 第一個值帶api Url 第二個戴要傳遞的值(post一定要帶值 如果真的沒有內容也可以給他一個空{})
  this.htp.postApi(
    'https://api.freeapi.app/api/v1/kitchen-sink/http-methods/post',postData)
.subscribe((res:any)=>{
  console.log(res);
})

}
}
