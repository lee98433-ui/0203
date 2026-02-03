import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
// import { FirstComponent } from './first/first.component';

export const routes: Routes = [
  {path:'first',component:FirstComponent},
  {path:'second',component:SecondComponent}


];
