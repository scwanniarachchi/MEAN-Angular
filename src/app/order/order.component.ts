import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  public orderForm !: FormGroup;
  constructor (private formBuilder:FormBuilder,private http: HttpClient,private router:Router){}
  
  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      name:[''],
      phone:[''],
      address:[''],
      email:[''],
      total:localStorage.getItem('total'),
    })
  }
  
  order(){
    if(this.orderForm.controls["name"].value != ''){
      if(this.orderForm.controls["phone"].value != ''){
          if(this.orderForm.controls["address"].value != ''){
            if(this.orderForm.controls["email"].value != ''){
              if(this.orderForm.controls["total"].value != ''){
                this.http.post<any>("http://localhost:4000/Order",this.orderForm.value).subscribe(
                  res=>{
                    console.log(res)
                    alert("successful!")
                    this.http.delete<any>("http://localhost:4000/Cart/clear/"+localStorage.getItem('id')).subscribe(
                      res=>{
                      console.log(res)
                    },err=>{
                      console.log(err)
                      alert("Connection Error!")
                    })
                    this.orderForm.reset()
                    this.router.navigate(['user'])
                },err=>{
                  console.log(err)
                  alert("Error!")
                })
              }else{
                alert("Total Required!")
              }
            }else{
              alert("Email Required!")
            }
          }else{
            alert("Address Required!")
          }
      }else{
        alert("Phone Required!")
      }
    }else{
      alert("name Required!")
    }
  }
}
