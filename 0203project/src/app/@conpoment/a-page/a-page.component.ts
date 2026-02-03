import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BPageComponent } from "../b-page/b-page.component";

@Component({
  selector: 'app-a-page',
  imports: [FormsModule, BPageComponent],
  templateUrl: './a-page.component.html',
  styleUrl: './a-page.component.scss'
})
export class APageComponent {
    constructor(
    private router:Router,
  ){}

  UserName!:string;
  UserEmail!:string;
  UserAddress!:string;


}
