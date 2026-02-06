import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FatherComponent } from './@component/father/father.component';
import { ChildComponent } from './@component/child/child.component';
import { APageComponent } from './@conpoment/a-page/a-page.component';
import { BPageComponent } from './@conpoment/b-page/b-page.component';
import { OutAComponent } from './@conpoment/out-a/out-a.component';
import { OutBComponent } from './@conpoment/out-b/out-b.component';
import { ArrdemoComponent } from './@compoment/arrdemo/arrdemo.component';
import { ApiDemo2Component } from './@compoment/api-demo2/api-demo2.component';
import { ApiDemoComponent } from './@compoment/api-demo/api-demo.component';
import { ApiDemo3Component } from './@compoment/api-demo3/api-demo3.component';
// import { FirstComponent } from './first/first.component';

export const routes: Routes = [
  {path:'first',component:FirstComponent},
  {path:'second',component:SecondComponent},
  {path:'father',component:FatherComponent},
  {path:'child',component:ChildComponent},
  {path:'a-page',component:APageComponent},
  {path:'b-page',component:BPageComponent},
  {path:'out-a',component:OutAComponent},
  {path:'out-b',component:OutBComponent},
  {path:'arrdemo',component:ArrdemoComponent},
  {path:"apidemo2",component:ApiDemo2Component},
  {path:"apidemo",component:ApiDemoComponent},
  {path:"apidemo3",component:ApiDemo3Component},
];
