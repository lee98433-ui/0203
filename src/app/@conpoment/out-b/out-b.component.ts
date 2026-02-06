import { Component, output } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-out-b',
  imports: [FormsModule],
  templateUrl: './out-b.component.html',
  styleUrl: './out-b.component.scss'
})
export class OutBComponent {
  calling=output<string>();
  Uname:string=''
  Uemail:string=''
  Uaddress:string=''

  submitData=output<{
    name:string
    email:string
    address:string
  }>()

  dropOut(){
    this.submitData.emit({
      name:this.Uname,
      email:this.Uemail,
      address:this.Uaddress,
    })
  }
}
