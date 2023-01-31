import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm !: FormGroup;
  constructor (private formBuilder:FormBuilder,private http: HttpClient,private router:Router){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:[''],
      password:['']
    })
    if(localStorage.getItem('privilege')=="seller"){
      this.router.navigate(['seller'])
    }else if(localStorage.getItem('privilege')=="user"){
      this.router.navigate(['user'])
    }
  }
  
  login(){
    if(this.loginForm.controls["username"].value != ''){
      if(this.loginForm.controls["password"].value != ''){
            this.http.post<any>("http://localhost:4000/User/login",this.loginForm.value).subscribe(
              res=>{
                console.log(res.data)
                this.loginForm.reset()
                alert("login successful!")
                if(res.data=="seller"){
                  localStorage.setItem('privilege', 'seller');
                  localStorage.setItem('id', res.id);
                  this.router.navigate(['seller'])
                }else{
                  localStorage.setItem('privilege', 'user');
                  localStorage.setItem('id', res.id);
                  this.router.navigate(['user'])
                }
            },err=>{
              console.log(err.error.err);
              alert(err.error.err)
            })
      }else{
        alert("Password Required!")
      }
    }else{
      alert("Username Required!")
    }
  }
}
