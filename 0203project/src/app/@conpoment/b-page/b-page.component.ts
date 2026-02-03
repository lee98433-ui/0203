import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-b-page',
  imports: [],
  templateUrl: './b-page.component.html',
  styleUrl: './b-page.component.scss'
})
export class BPageComponent {

    @Input() UserName!:string
    @Input() UserEmail!:string
    @Input() UserAddress!:string
  }




