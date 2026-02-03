import { Component, Input, input, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() messgae!:string;

  notify=output<string>();//宣告一個output的事件

  send(){
    this.notify.emit('我是子元件');//發送事件給父元件
  }
  }
