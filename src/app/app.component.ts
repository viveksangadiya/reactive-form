import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Username } from './shared/username.validator';
import { Passwordvalidator } from './shared/password.validator';
import { RegistrationService } from './registration.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  datas: any;
  ngOnInit(): void {
    
    this.datas=JSON.parse(localStorage.getItem('') ?? "{}");
    console.log(this.datas);
  }
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

constructor(private fb:FormBuilder, private registrationService:RegistrationService){}

saveFormDataToLocalStorage(){
  localStorage.setItem('data',JSON.stringify(this.registrationForm.value));

}
  registrationForm : any=this.fb.group(
     {
      userName : ['',[Validators.required,Validators.minLength(3),Username]],
      passWord : [''],
      confirmPassword:[''],
      address : this.fb.group(
        {
          city: [''],
          state:[''],
          country:['']
        }
      )
    },{validator: Passwordvalidator})

    onSubmit(){
      return this.registrationService.register(this.registrationForm.value).subscribe(
        response => console.log('success',response)
      );
    }
}
