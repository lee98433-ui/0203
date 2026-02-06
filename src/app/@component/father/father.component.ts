import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-father',
  imports: [ChildComponent],
  templateUrl: './father.component.html',
  styleUrl: './father.component.scss'
})
export class FatherComponent {
  // fatherMessage:string='hello world'


  fatherFun(msg:string){
    console.log(msg)
  }
}
