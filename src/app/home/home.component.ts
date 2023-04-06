import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent
{
  formValidation = new FormGroup({
  name: new FormControl("",[Validators.maxLength(25), Validators.minLength(3), Validators.required])
  ,age: new FormControl("",[Validators.max(35), Validators.min(15), Validators.required]),
  email: new FormControl("",[Validators.email, Validators.required]),
  });

  getValues()
  {
    console.log(this.formValidation.valid)
    console.log(this.formValidation.controls["email"].valid)
    console.log(this.formValidation.controls["name"].valid)
    console.log(this.formValidation.controls["age"].valid)
  }

  validName() {
    return this .formValidation.controls["name"].valid
  }
  validAge() {
    return this .formValidation.controls["age"].valid
  }
  validEmail() {
    return this.formValidation.controls["email"].valid
  }
  Name: string = '';
  Age: string = '';
  Email: string = '';
  obj: { Name: string , Age: string, Email: string }={Name:" ",Age:" ", Email:" "} ;
  
AddStudent(name: any, age: any, email: any)
  {
  this.Name = name;
  this.Age = age;
  this.Email = email;
  this.obj = { Name: name, Age: age, Email: email } 
  if(this.Name.length>=4 && this.Email && +this.Age>=20 && +this.Age<=35 )
  alert(`student ${this.Name} with age ${this.Age} and email ${this.Email} added succefully`)
  }
}
