import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-item',
  templateUrl: './one-item.component.html',
  styleUrls: ['./one-item.component.css']
})
export class OneItemComponent {

  item:any;
  quantity:number=0;
  max_q:any;
  constructor (private http: HttpClient,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getItem(params['id']))
  }

  getItem(id:String){
    this.http.get<any>("http://localhost:4000/Item/"+id).subscribe(
      results=>{
        this.item=results
        this.max_q=results.availability
    },err=>{
      console.log(err)
      alert("Connection Error!")
    })
  }

  setQ(e: any){
    console.log(e.target.value)
    this.quantity=e.target.value
  }

  Cart(){
    if(this.quantity != 0){
      if(this.quantity <= this.max_q){
        if(this.quantity > 0){
          this.http.post<any>("http://localhost:4000/Cart",{userid:localStorage.getItem('id'),itemid:this.item._id,quantity:this.quantity}).subscribe(
            res=>{
              console.log(res)
            alert("Add to Cart successful!")
            this.router.navigate(['user'])
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
}
