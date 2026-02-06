import { Component, output } from '@angular/core';
import { OutBComponent } from "../out-b/out-b.component";

@Component({
  selector: 'app-out-a',
  imports: [OutBComponent],
  templateUrl: './out-a.component.html',
  styleUrl: './out-a.component.scss'
})
export class OutAComponent {
  formData={
    name:"",
    address:"",
    email:""



  }

//去取得子元件發送的通知
  outputGo(data:{name:string,address:string,email:string}){
    this.formData=data
  }

}
