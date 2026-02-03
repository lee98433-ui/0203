import { Component } from '@angular/core';

@Component({
  selector: 'app-arrdemo',
  imports: [],
  templateUrl: './arrdemo.component.html',
  styleUrl: './arrdemo.component.scss'
})
export class ArrdemoComponent {

  ngOnInit(): void {
    let arrData=[2,3,4,67,84];
    console.log(arrData[0]);
    console.log(arrData[1]);
    console.log(arrData[2]);
    console.log(arrData[3]);
for(let i=0;i<arrData.length;i++){
  console.log(arrData[i])};
  }

}
