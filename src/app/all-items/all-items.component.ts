import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import io from 'socket.io-client';

const socket = io('http://localhost:4000/');

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent {

  search_items:String='';
  items:any;
  constructor (private http: HttpClient,private router:Router){}

  ngOnInit(): void {
    this.http.get<any>("http://localhost:4000/item").subscribe(
      results=>{
        this.items=results
        console.log(results)
    },err=>{
      console.log(err)
      alert("Connection Error!")
    })
    
    socket.on('item', (res) => {
      console.log(res)
      location.reload()
    })
  }
  
}
