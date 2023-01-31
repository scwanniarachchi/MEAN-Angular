import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'stack-client';
  
  constructor (private http: HttpClient,private router:Router){}

  ngOnInit(): void {
  }

  userLogin(){
    if(localStorage.getItem('privilege')=="seller"||localStorage.getItem('privilege')=="user"){
      return true;
    }else{
      return false;
    }
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['login'])
  }

  profile(){
    if(localStorage.getItem('usertype')=="admin"){
      this.router.navigate(['admin'])
    }else{
      this.router.navigate(['dashboard'])
    }
  }
}
