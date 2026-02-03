import { ExampleService } from './../@service/example.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
constructor(
  private exampleService:ExampleService
){}

getData!:string

getFirstData!:{
  account:string
  password:string
}

ngOnInit(): void {
  this.getFirstData=this.exampleService.globalData;
  //this.getData=this.exampleService.globalData

}
}
