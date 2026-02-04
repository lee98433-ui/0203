import { Component } from '@angular/core';

@Component({
  selector: 'app-arrdemo',
  imports: [],
  templateUrl: './arrdemo.component.html',
  styleUrl: './arrdemo.component.scss'
})
export class ArrdemoComponent {
// arrData2=[10,20,3,5,8,9,23,657,123,67]
arraydata=[4,5,6];
arraydata2=[
  {id:1,name:'a'},
  {id:2,name:'b'},
  {id:3,name:'c'},
];
arrayData3=[
  {id:1,
  name:'a',
  userData:[
    {userId:'1'}
  ]},
  {id:2,
  name:'b',
  userData:[
    {userId:'2'}
  ]},
  {id:3,
  name:'c',
  userData:[
    {userId:'3'}
  ]}
]
userArr=[
  {userName:'玩家A',
  lev:10,
  props:[
    {propsName:'蘑菇',
    amount:5,
    },
    {propsName:'金幣',
    amount:15,
    },
  ]
},
  {userName:'玩家b',
  lev:10,
  props:[
    {propsName:'龜殼',
    amount:1,
    },
    {propsName:'砲彈',
    amount:15,
    },
  ]
},
]
  testNum=1
  role="管理員"


  ngOnInit(): void {
//     let arrData=[2,3,4,67,84];
//     console.log(arrData[0]);
//     console.log(arrData[1]);
//     console.log(arrData[2]);
//     console.log(arrData[3]);
// for(let i=0;i<arrData.length;i++){
//   console.log(arrData[i])};
// for(let data of arrData){
//   console.log(data)
// }

// let arrData2=[10,20,3,5,8,9,23,657,123,67];
// for (let i2 = 0; i2 < arrData2.length; i2++){
//   if(arrData2[i2]==9){
//     console.log(i2)
//   }
// }
if(this.testNum == 1){
  console.log(1);
}else if(this.testNum ==2){
  console.log(2);
}else{
  console.log('other')
}
switch(this.role){
  case 'admin':
    console.log("管理員");
    break;
  case 'user':
    console.log("使用者") ;
    break;
  default:
    console.log("你誰啊你") ;

}

}//ngOnInit

}
