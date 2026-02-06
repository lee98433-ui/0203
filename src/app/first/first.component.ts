import { ExampleService } from './../@service/example.service';
import { Router } from '@angular/router';
import { routes } from './../app.routes';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  imports: [FormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  constructor(
    private router:Router,
    private exampleService:ExampleService
  ){}


  account!:string;//帳號
  password!:string//密碼

  sendData(){
    this.exampleService.globalData={
      account:this.account,
      password:this.password,
    }
    this.router.navigate(['/second'])
  }

}
