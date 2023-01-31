import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  quantity:any
  max_q:any
  items:any
  total:any
  constructor (private http: HttpClient,private router:Router){}

  ngOnInit(): void {
    this.http.get<any>("http://localhost:4000/Cart/"+localStorage.getItem('id')).subscribe(
      res=>{
        console.log(res)
        var total=0
        res.forEach(function (data:any){
          console.log(data)
          total = total+(data.inner_data.quantity*data.price)
        })
        this.total=total
        this.items = res
      },err=>{
        console.log(err)
        alert("Connection Error!")
      })
  }

  Edit_Cart(id:any){
    if(this.quantity != ''){
      if(this.quantity <= this.max_q){
        if(this.quantity > 0){
          this.http.put<any>("http://localhost:4000/Cart/"+id,{quantity:this.quantity}).subscribe(
            res=>{
              console.log(res)
            alert("Change successful!")
            location.reload()
          },err=>{
            console.log(err)
            alert("Error!")
          })
        }else{
          alert("Quantity Required Zero not accepted!")
        }
      }else{
        alert("Quantity Exceeded!")
      }
    }else{
      alert("Quantity Required!")
    }
  }

  remove_Item(id:any){
    this.http.delete<any>("http://localhost:4000/Cart/"+id).subscribe(
      res=>{
        console.log(res)
        alert("successful!")
        location.reload()
    },err=>{
      console.log(err)
      alert("Connection Error!")
    })
  }

  setQ(e: any,quantity:any){
    console.log(e.target.value)
    this.quantity=e.target.value
    this.max_q=quantity
    console.log(this.max_q)
  }

  checkout(){
    if(this.total){
      localStorage.setItem('total',this.total)
      this.router.navigate(['order'])
    }
  }
}
