import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
onLoadApi() {
 this.registrationForm.setValue({
  userName : 'vivek',
  passWord : 'vivek',
  confirmPassword:'vivek',
  address : (
    {
      city:'vivek',
      state:'vivek',
      country:'vivek'
    }
  )
 })
}
  registrationForm=new FormGroup(
    {
      userName : new FormControl(''),
      passWord : new FormControl(''),
      confirmPassword:new FormControl(''),
      address : new FormGroup(
        {
          city:new FormControl(''),
          state:new FormControl(''),
          country:new FormControl('')
        }
      )
    }
  )
}
